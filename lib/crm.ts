interface CRMInput {
  name: string;
  phone?: string;
  email?: string;
  reasonForSelling?: string;
  propertyAddress: string;
  city: string;
  condition: string;
  timeframe: string;
  preferredContact: string;
  smsNonMarketingConsent?: boolean;
  smsMarketingConsent?: boolean;
  utm?: string;
  gclid?: string;
  pagePath?: string;
  recaptchaScore?: number;
  ip?: string;
}

export async function postToCRM(data: CRMInput): Promise<boolean> {
  const webhookUrl = process.env.PROSPECTX_WEBHOOK_URL ?? process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('PROSPECTX_WEBHOOK_URL (or CRM_WEBHOOK_URL) not configured');
    return false;
  }

  const apiToken = process.env.PROSPECTX_API_TOKEN ?? process.env.CRM_WEBHOOK_TOKEN;
  if (!apiToken) {
    console.warn('PROSPECTX_API_TOKEN (or CRM_WEBHOOK_TOKEN) not configured');
    return false;
  }

  const trimmedName = data.name.trim();
  const [firstName, ...restName] = trimmedName.split(/\s+/);
  const lastName = restName.length ? restName.join(' ') : undefined;

  const noteLines = [
    `Property condition: ${data.condition}`,
    `Preferred contact: ${data.preferredContact}`,
    `Timeframe to sell: ${data.timeframe}`,
    data.smsNonMarketingConsent !== undefined
      ? `SMS non-marketing consent: ${data.smsNonMarketingConsent ? 'yes' : 'no'}`
      : null,
    data.smsMarketingConsent !== undefined
      ? `SMS marketing consent: ${data.smsMarketingConsent ? 'yes' : 'no'}`
      : null,
    data.reasonForSelling ? `Reason for selling: ${data.reasonForSelling}` : null,
    data.utm ? `UTM source: ${data.utm}` : null,
    data.gclid ? `GCLID: ${data.gclid}` : null,
    data.pagePath ? `Page path: ${data.pagePath}` : null,
    data.ip ? `IP address: ${data.ip}` : null,
  ].filter(Boolean);

  const phoneValue =
    data.phone && data.phone.trim() !== '' && data.phone.trim() !== '+1'
      ? data.phone.trim()
      : undefined;

  const payload: Record<string, unknown> = {
    name: trimmedName,
    firstname: firstName,
    lastname: lastName,
    ...(phoneValue ? { phone: phoneValue } : {}),
    address: data.propertyAddress,
    property_address: data.propertyAddress,
    city: data.city,
    state: undefined,
    zip: undefined,
    source: data.utm ? `Website (${data.utm})` : 'Website',
    note: noteLines.length ? noteLines.join('\n') : undefined,
    assign_campaign_from_source: true,
    tags: 'web-form',
  };

  // Add email only if provided (optional for Ads form variant)
  if (data.email) {
    payload.email = data.email;
  }

  Object.keys(payload).forEach((key) => {
    if (payload[key] === undefined || payload[key] === '') {
      delete payload[key];
    }
  });

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('CRM webhook error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('CRM webhook request error:', error);
    return false;
  }
}
