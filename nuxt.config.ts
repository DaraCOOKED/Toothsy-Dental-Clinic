import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "./app/assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: "service_09csxvs",
      emailjsTemplateId: "template_kh59r91",
      emailjsPublicKey: "T8FLPsFfvUtRLmlaa",
      strapiUrl: "http://localhost:1337",
      apiBase: "http://localhost:8000/api",
    },
  },
  app: {
    baseURL: "/toothsy-detal-clinic/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
});