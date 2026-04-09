const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const chatbotRouter = require('./routes/chatbot');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Must match frontend's API_URL port

// CORS configuration for local development
const corsOptions = {
  origin: 'https://codewithsubhadip.vercel.app',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure required CORS headers are sent before /api/chat handlers.
app.use('/api/chat', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

// Routes
app.use('/api/chat', chatbotRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    port: port,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`\n🚀 Server ready at http://localhost:${port}`);
  console.log(`🔐 CORS whitelisted ports: 5173, 3000`);
  console.log(`💡 Frontend should run on one of these ports\n`);
});
