import { z } from 'zod';

const optionalPhoneSchema = z.string().refine(
  (val) => {
    const v = (val ?? '').trim();
    if (v === '' || v === '+1') return true;
    return /^\+1\(\d{3}\) \d{3}-\d{4}$/.test(v);
  },
  { message: 'Invalid phone number format. Use +1(XXX) XXX-XXXX or leave blank.' }
);

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: optionalPhoneSchema,
  email: z
    .union([z.string().email('Invalid email address'), z.string().length(0), z.undefined()])
    .optional(),
  reasonForSelling: z.string().optional(),
  propertyAddress: z.string().min(5, 'Address is required').max(200),
  city: z.string().min(2).max(100),
  condition: z.enum(['as-is', 'cosmetic', 'major-repair'], {
    required_error: 'Please select property condition',
  }),
  timeframe: z.enum(['asap', '7-14-days', '30-plus'], {
    required_error: 'Please select timeframe',
  }),
  preferredContact: z.enum(['call', 'sms', 'email']),
  smsNonMarketingConsent: z.boolean().default(false),
  smsMarketingConsent: z.boolean().default(false),
  recaptchaToken: z.string().optional(),
});

export const extendedLeadFormSchema = leadFormSchema.extend({
  propertyType: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  squareFeet: z.string().optional(),
  desiredPrice: z.string().optional(),
  photos: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ExtendedLeadFormData = z.infer<typeof extendedLeadFormSchema>;
