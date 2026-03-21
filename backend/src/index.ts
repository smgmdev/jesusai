import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import subscribeRouter from './routes/subscribe'
import webhookRouter from './routes/webhook'
import callsRouter from './routes/calls'
import { startScheduler } from './services/scheduler'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))

// Webhook needs raw body BEFORE json middleware
app.use('/api/webhook', webhookRouter)

app.use(express.json())
app.use('/api/subscribe', subscribeRouter)
app.use('/api/calls', callsRouter)

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'Daily Verse' }))

startScheduler()

app.listen(PORT, () => {
  console.log(`🙏 Daily Verse backend running on http://localhost:${PORT}`)
})
