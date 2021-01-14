import express from 'express'
import user from './user/endpoint'

const app = express()

app.use('/api/v1/', user)

export default app
