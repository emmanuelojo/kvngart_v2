// import { useRuntimeConfig } from "#imports";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const config = useRuntimeConfig();

//   // 1. Verify the event (Paystack sends a signature header)
//   // Logic: Check if body.event === 'charge.success'
//   if (body.event === "charge.success") {
//     const data = body.data;
//     const customerEmail = data.customer.email;
//     const orderDetails = data.metadata.custom_fields.find((f: any) => f.variable_name === "order_details")?.value;

//     // 2. Send the email
//     await sendOrderEmail(customerEmail, data.amount / 100, orderDetails, data.reference);

//     return { status: "success" };
//   }

//   return { status: "ignored" };
// });

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   // Add this inside your webhook handler to be safe:
// const signature = getHeader(event, 'x-paystack-signature');
// const secret = process.env.PAYSTACK_SECRET_KEY;
// // Use crypto to verify (HMAC SHA512)

//   // 1. Paystack event type check
//   if (body.event === "charge.success") {
//     const { data } = body;

//     // 2. Grab the email and the order summary we sent in the metadata
//     const customerEmail = data.customer.email;
//     const amount = data.amount / 100; // Paystack sends amount in Kobo
//     const reference = data.reference;

//     // Find our custom "order_details" field from the metadata
//     const orderSummary =
//       data.metadata?.custom_fields?.find((f: any) => f.variable_name === "order_details")?.value || "Items purchased";

//     // 3. Trigger the email utility
//     await sendOrderEmail(customerEmail, amount, orderSummary, reference);

//     return { message: "Webhook received" };
//   }

//   return { message: "Event ignored" };
// });

import crypto from "node:crypto";
import { sendOrderEmail } from "~/server/utils/resend";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readRawBody(event); // Get the raw string body for accurate hashing
  const signature = getHeader(event, "x-paystack-signature");

  if (!body || !signature) {
    throw createError({ statusCode: 400, statusMessage: "Missing body or signature" });
  }

  // 1. Verify the signature
  const hash = crypto.createHmac("sha512", config.paystackSecretKey).update(body).digest("hex");

  if (hash !== signature) {
    console.error("Invalid Paystack Signature!");
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  // 2. Parse the verified body
  const payload = JSON.parse(body);

  // 3. Process the event
  if (payload.event === "charge.success") {
    const { data } = payload;

    // Extract metadata we sent from the frontend
    const orderSummary =
      data.metadata?.custom_fields?.find((f: any) => f.variable_name === "order_details")?.value || "No items listed";

    // Trigger our email utility (defined in server/utils/resend.ts)
    await sendOrderEmail(data.customer.email, data.amount / 100, orderSummary, data.reference);

    return { message: "Success" };
  }

  return { message: "Event ignored" };
});
