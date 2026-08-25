'use client';

import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Global singleton state to prevent multiple loads
let recaptchaScriptLoaded = false;
let recaptchaReadyPromise: Promise<void> | null = null;
let recaptchaScriptElement: HTMLScriptElement | null = null;
let isLoadingInProgress = false;
let loadRecaptchaLock = false; // Additional lock to prevent race conditions

/**
 * Hook to load and manage reCAPTCHA v3
 * Uses lazy loading with Intersection Observer to only load when form is visible
 */
export function useRecaptcha(formRef?: React.RefObject<HTMLElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      // Allow form to work without reCAPTCHA in dev
      setIsLoaded(true);
      setIsReady(true);
      return;
    }

    // Early exit if script is already loaded and ready
    if (recaptchaScriptLoaded && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsLoaded(true);
        setIsReady(true);
      });
      return;
    }

    // Early exit if script is currently loading (wait for existing load)
    if (loadRecaptchaLock || isLoadingInProgress || recaptchaReadyPromise) {
      if (recaptchaReadyPromise) {
        recaptchaReadyPromise.then(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
      }
      return;
    }

    // Early exit if script exists in DOM
    const existingScriptCheck = document.querySelector(
      `script[src*="recaptcha/api.js"], script#recaptcha-script`
    );
    if (existingScriptCheck) {
      recaptchaScriptElement = existingScriptCheck as HTMLScriptElement;
      recaptchaScriptLoaded = true;
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
      }
      return;
    }

    // Lazy load: only load when form is visible (or immediately if no ref)
    const loadRecaptcha = () => {
      // Early return if already loaded
      if (recaptchaScriptLoaded && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
          setIsReady(true);
        });
        return;
      }

      // Prevent concurrent loads with lock
      if (loadRecaptchaLock) {
        // Wait for existing load
        if (recaptchaReadyPromise) {
          recaptchaReadyPromise.then(() => {
            setIsLoaded(true);
            setIsReady(true);
          });
        }
        return;
      }

      // Check if script already exists in DOM (synchronous check first)
      const existingScript = document.querySelector(
        `script[src*="recaptcha/api.js"], script#recaptcha-script`
      ) as HTMLScriptElement;

      if (existingScript) {
        recaptchaScriptElement = existingScript;
        recaptchaScriptLoaded = true;
        loadRecaptchaLock = false;
        isLoadingInProgress = false;

        if (window.grecaptcha) {
          if (!recaptchaReadyPromise) {
            recaptchaReadyPromise = new Promise((resolve) => {
              window.grecaptcha!.ready(() => {
                setIsLoaded(true);
                setIsReady(true);
                resolve();
              });
            });
          } else {
            recaptchaReadyPromise.then(() => {
              setIsLoaded(true);
              setIsReady(true);
            });
          }
        } else {
          // Script exists but grecaptcha not ready yet
          existingScript.addEventListener(
            'load',
            () => {
              if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                  setIsLoaded(true);
                  setIsReady(true);
                });
              }
            },
            { once: true }
          );
        }
        return;
      }

      // Set lock immediately to prevent race conditions
      loadRecaptchaLock = true;
      isLoadingInProgress = true;

      // Create and load script
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.id = 'recaptcha-script'; // Add ID for easier tracking
      recaptchaScriptElement = script;

      recaptchaReadyPromise = new Promise((resolve) => {
        script.onload = () => {
          recaptchaScriptLoaded = true;
          loadRecaptchaLock = false;
          isLoadingInProgress = false;
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
              setIsLoaded(true);
              setIsReady(true);
              resolve();
            });
          } else {
            setIsLoaded(true);
            setIsReady(true);
            resolve();
          }
        };

        script.onerror = () => {
          console.error('Failed to load reCAPTCHA script');
          recaptchaScriptLoaded = false;
          loadRecaptchaLock = false;
          isLoadingInProgress = false;
          recaptchaScriptElement = null;
          setIsLoaded(true);
          setIsReady(true);
          resolve();
        };
      });

      // Final synchronous check before appending - prevent race conditions
      const finalCheck =
        document.getElementById('recaptcha-script') ||
        document.querySelector(`script[src*="recaptcha/api.js"]`);

      if (!finalCheck) {
        // Safe to append - no other instance added it
        document.head.appendChild(script);
      } else {
        // Script was added by another instance between checks, clean up
        loadRecaptchaLock = false;
        isLoadingInProgress = false;
        recaptchaScriptElement = finalCheck as HTMLScriptElement;
        recaptchaScriptLoaded = true;

        if (recaptchaReadyPromise) {
          recaptchaReadyPromise.then(() => {
            setIsLoaded(true);
            setIsReady(true);
          });
        } else if (window.grecaptcha) {
          recaptchaReadyPromise = new Promise((resolve) => {
            window.grecaptcha!.ready(() => {
              setIsLoaded(true);
              setIsReady(true);
              resolve();
            });
          });
        }
      }
    };

    // If form ref is provided, use Intersection Observer for lazy loading
    if (formRef?.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !recaptchaScriptLoaded) {
              loadRecaptcha();
              // Disconnect after loading
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin: '100px', // Start loading 100px before form is visible
        }
      );

      observerRef.current.observe(formRef.current);
    } else {
      // No ref provided, load immediately (but still check for duplicates)
      loadRecaptcha();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [formRef]);

  const executeRecaptcha = async (action: string = 'submit_lead'): Promise<string> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey || !window.grecaptcha || !isReady) {
      return '';
    }

    try {
      return await window.grecaptcha.execute(siteKey, { action });
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      return '';
    }
  };

  return {
    isLoaded,
    isReady,
    executeRecaptcha,
  };
}
