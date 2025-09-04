import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://329cbd4e3b00ff05a29a80f46d098546@o4509941907390464.ingest.us.sentry.io/4509941908897792",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
