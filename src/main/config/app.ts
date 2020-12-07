import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import { exposeRoutes } from '../routes'
import cors from 'cors'
import { serve, setup } from 'swagger-ui-express'
import swagger from '../docs'

const app = express()

app.use(express.json())
app.use(cors())
app.use(
  '/api-docs',
  (req: Request, res: Response, next: NextFunction) => {
    res.set(
      'cache-control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    )
    res.set('pragma', 'no-cache')
    res.set('expires', '0')
    res.set('surrogate-control', 'no-store')
    next()
  },
  serve,
  setup(swagger)
)

app.use(exposeRoutes)

export default app
