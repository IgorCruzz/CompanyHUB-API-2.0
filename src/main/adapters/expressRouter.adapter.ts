import { IController, IHttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adapRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
      userId: req.userId,
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse.body)
    } else {
      res.status(httpResponse.status).json({
        error: httpResponse.body.message,
      })
    }
  }
}
