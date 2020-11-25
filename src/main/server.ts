import 'reflect-metadata'
import '../infra/db/typeorm'
import express from 'express'
import { exposeRoutes } from './routes'

const app = express()

app.use(express.json())

app.use(exposeRoutes)

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
