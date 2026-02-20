// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys (Server-side only)
    paystackSecretKey: process.env.NUXT_PUBLIC_PAYSTACK_SECRET_KEY,
    resendApiKey: process.env.NUXT_PUBLIC_RESEND_API_KEY,
    public: {
      paystackPublicKey: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      // gtmContainerId: GlobalSettings[appEnv].gtmContainerId,
      // gtmDebug: GlobalSettings[appEnv].gtmDebug,
      // gtmEnabled: GlobalSettings[appEnv].gtmEnabled,
      // baseUrl: process.env.BASE_URL,
      // firebaseApiKey: process.env.FIREBASE_API_KEY,
      // googleApiKey: process.env.GOOGLE_API_KEY,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "motion-v/nuxt"],
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: [],
  },
  app: {
    head: {
      title: "KVNG Art",
      meta: [
        {
          name: "description",
          content:
            "2D and 3D architecture sketching, drawings, modeling, animation and renders. Portraits. Digital, ink, pencil hyper-realistic portraits of all sizes.",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://res.cloudinary.com/dj3yahj56/image/upload/v1771009443/logo_vumptz.jpg",
        },
      ],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
});
