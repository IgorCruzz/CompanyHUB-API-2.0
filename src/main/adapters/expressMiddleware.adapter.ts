import { IHttpRequest, IMiddleware } from '@/presentation/protocols'

import { NextFunction, Request, Response } from 'express'

export const adapMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: IHttpRequest = {
      headers: req.headers,
      body: req.body,
      params: req.params,
    }

    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.status === 200) {
      Object.assign(req, httpResponse.body)

      next()
    } else {
      res.status(httpResponse.status).json({
        error: httpResponse.body.message,
      })
    }
  }
}
