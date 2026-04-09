require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    env: process.env.NODE_ENV || 'development'
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || 'AIzaSyC_IwWldy7KHlcy73b-cF5Ui8meF_WYY_8',
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  }
};