import { Resend } from "resend";

export const sendOrderEmail = async (to: string, amount: number, summary: string, ref: string) => {
  const config = useRuntimeConfig();

  // Initialize Resend with the private key
  const resend = new Resend(config.resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Store <orders@yourdomain.com>", // Replace with your verified domain
      to: [to],
      subject: `Confirming your Order #${ref.slice(-6).toUpperCase()}`,
      html: `
        <div style="font-family: 'Helvetica', sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Thanks for your order!</h1>
          <p style="margin-bottom: 24px; color: #4b5563;">We've received your payment and we're getting your items ready.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 12px;">Order Summary</h2>
            <div style="white-space: pre-wrap; line-height: 1.6;">${summary}</div>
          </div>

          <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; pt: 16px;">
            <div>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Total Paid</p>
              <p style="margin: 4px 0 0; font-size: 18px; font-weight: bold;">₦${amount.toLocaleString()}</p>
            </div>
            <div style="text-align: right;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Reference</p>
              <p style="margin: 4px 0 0; font-family: monospace; font-size: 14px;">${ref}</p>
            </div>
          </div>
          
          <div style="margin-top: 32px; text-align: center; font-size: 12px; color: #9ca3af;">
            <p>&copy; 2026 Your Store Name. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Email failed to send:", err);
  }
};
