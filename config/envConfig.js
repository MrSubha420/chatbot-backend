require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    env: process.env.NODE_ENV || 'development'
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  }
};
