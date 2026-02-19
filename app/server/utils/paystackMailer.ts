import { Resend } from "resend";
import { getEmailHtml } from "./paystackEmailTemplate";

export const sendOrderEmail = async (to: string, amount: number, summary: string, ref: string) => {
  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  await resend.emails.send({
    from: "Store <orders@yourdomain.com>",
    to: [to],
    subject: `Order Confirmation #${ref}`,
    html: getEmailHtml(amount, summary, ref),
  });
};
