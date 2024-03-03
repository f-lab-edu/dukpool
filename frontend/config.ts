export const CONFIG = {
  LOCAL: process.env.LOCAL,
  DOMAIN: process.env.DOMAIN,
  BASE_URL: process.env.BASE_URL,
  ENV: process.env.NODE_ENV,
  GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  API_KEYS: {
    LOGIN: process.env.KAKAO_LOGIN_API_KEY,
  },
} as const;
