import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()


const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/api/v1/dalle', dalleRoutes)

app.listen(3000, () => {
    return console.log('Server on fire 3000')
})