
import 'reflect-metadata'
import '../../infra/db/typeorm'
import express from 'express'
import { exposeRoutes } from '../routes'

const app = express()

app.use(express.json())

app.use(exposeRoutes)

export default app
