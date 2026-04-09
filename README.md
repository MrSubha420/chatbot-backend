# Chatbot Backend 🤖

AI-powered Express backend for a personal chatbot using Gemini. ⚡

## Features ✨
- Chat endpoint at `/api/chat` 💬
- Gemini-powered responses 🧠
- Local dev CORS support for Vite frontend 🌐
- Health check endpoint at `/health` ❤️

## Tech Stack 🛠️
- Node.js + Express
- Google Generative AI SDK
- dotenv

## Quick Start 🚀

### 1) Install dependencies 📦
```bash
npm install
```

### 2) Add environment variables 🔐
Create `.env` in project root:

```env
PORT=3001
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

### 3) Run the server ▶️
```bash
npm run dev
```

Server runs on `http://localhost:3001` by default.

## API 🧾

### `POST /api/chat`
Send a chat message:

```json
{
  "message": "Tell me about Subhadip",
  "history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello!" }
  ]
}
```

Response:

```json
{
  "response": "Generated chatbot reply...",
  "timestamp": "2026-04-09T12:00:00.000Z"
}
```

### `GET /health`
Basic health check for server status.

## CORS Setup (Frontend on Vite) 🌍

For cross-origin requests from `http://localhost:5173`, backend returns:

- `Access-Control-Allow-Origin: http://localhost:5173`
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`

These headers are handled for both `OPTIONS` and `POST` on `/api/chat`.

## Optional Dev Workaround: Vite Proxy 🔁

Use a proxy so frontend calls `/api/chat` on same origin, while Vite forwards to backend:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
```

Then frontend can call relative endpoint:

```js
fetch('/api/chat', { method: 'POST', ... })
```

## Notes 📝
- Keep `.env` out of version control.
- Ensure valid Gemini API key before testing.