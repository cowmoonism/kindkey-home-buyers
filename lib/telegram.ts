export async function sendTelegramMessage(
  message: string,
  parseMode: 'HTML' | 'Markdown' = 'HTML'
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not configured');
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

export function formatLeadForTelegram(lead: {
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
  pagePath?: string;
}): string {
  const conditionLabels: Record<string, string> = {
    'as-is': 'As-Is',
    cosmetic: 'Cosmetic Fixes',
    'major-repair': 'Major Repairs',
  };

  const timeframeLabels: Record<string, string> = {
    asap: 'ASAP',
    '7-14-days': '7-14 Days',
    '30-plus': '30+ Days',
  };

  const contactLabels: Record<string, string> = {
    call: '📞 Call',
    sms: '💬 Text',
    email: '📧 Email',
  };

  return `
🏠 <b>New Lead - KindKey Home Buyers</b>

👤 <b>Name:</b> ${lead.name}
📞 <b>Phone:</b> ${lead.phone && lead.phone.trim() !== '+1' ? lead.phone : '—'}
${lead.email ? `📧 <b>Email:</b> ${lead.email}` : ''}

📍 <b>Property:</b>
${lead.propertyAddress}
${lead.city}

🏚️ <b>Condition:</b> ${conditionLabels[lead.condition] || lead.condition}
⏰ <b>Timeframe:</b> ${timeframeLabels[lead.timeframe] || lead.timeframe}
📱 <b>Contact:</b> ${contactLabels[lead.preferredContact] || lead.preferredContact}
${lead.smsNonMarketingConsent !== undefined ? `\n📱 <b>SMS non-marketing:</b> ${lead.smsNonMarketingConsent ? 'yes' : 'no'}` : ''}
${lead.smsMarketingConsent !== undefined ? `\n📣 <b>SMS marketing:</b> ${lead.smsMarketingConsent ? 'yes' : 'no'}` : ''}

${lead.reasonForSelling ? `💭 <b>Reason for selling:</b>\n${lead.reasonForSelling}\n` : ''}

${lead.pagePath ? `🔗 <b>Page:</b> ${lead.pagePath}` : ''}
  `.trim();
}
