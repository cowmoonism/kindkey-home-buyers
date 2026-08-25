'use client';

/**
 * Detects if the current page should be in "Ads Mode" based on URL parameters
 * Ads Mode is triggered by:
 * - gclid parameter (Google Click ID)
 * - utm_source=google
 * - utm_medium=cpc
 */
export function isAdsMode(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const params = new URLSearchParams(window.location.search);

  // Check for gclid (Google Click ID)
  if (params.has('gclid')) {
    return true;
  }

  // Check for Google Ads UTM parameters
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');

  if (utmSource === 'google' && utmMedium === 'cpc') {
    return true;
  }

  return false;
}

/**
 * Gets the city name from the current URL path
 * Example: /areas/kent-wa -> "Kent"
 */
export function getCityFromPath(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const path = window.location.pathname;
  const match = path.match(/\/areas\/([^/]+)/);

  if (!match) {
    return null;
  }

  // Convert slug to city name
  const slug = match[1];
  const cityMap: Record<string, string> = {
    kent: 'Kent',
    'kent-wa': 'Kent',
    auburn: 'Auburn',
    'auburn-wa': 'Auburn',
    tacoma: 'Tacoma',
    'tacoma-wa': 'Tacoma',
    'federal-way': 'Federal Way',
    'federal-way-wa': 'Federal Way',
    milton: 'Milton',
    'milton-wa': 'Milton',
    edgewood: 'Edgewood',
    'edgewood-wa': 'Edgewood',
    puyallup: 'Puyallup',
    'puyallup-wa': 'Puyallup',
  };

  return cityMap[slug] || null;
}
