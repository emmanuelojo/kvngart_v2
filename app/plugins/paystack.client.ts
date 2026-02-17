import PaystackPop from "@paystack/inline-js";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      paystack: new PaystackPop(),
    },
  };
});
