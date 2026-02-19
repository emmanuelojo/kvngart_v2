export const getEmailHtml = (amount: number, itemsSummary: string, ref: string) => {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #000;">Order Confirmed! 🚀</h2>
      <p>Thanks for your purchase. Here is a summary of what you bought:</p>
      
      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <pre style="white-space: pre-wrap; font-family: inherit;">${itemsSummary}</pre>
      </div>

      <div style="border-top: 2px solid #eee; pt: 10px;">
        <p><strong>Total Paid:</strong> ₦${amount.toLocaleString()}</p>
        <p><strong>Transaction Ref:</strong> ${ref}</p>
      </div>

      <p style="font-size: 12px; color: #666; margin-top: 30px;">
        If you have any questions, just reply to this email.
      </p>
    </div>
  `;
};
