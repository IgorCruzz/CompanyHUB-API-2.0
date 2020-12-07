import { badRequest } from './components/bad-request'
import { forbidden } from './components/forbidden'
import { serverError } from './components/server-error'
import { notFound } from './components/not-found'
import { unauthorized } from './components/unauthorized'
import { BearerSchema } from './schemas/results/apiKey/Bearerschema'

export default {
  securitySchemes: {
    apiKeyAuth: BearerSchema,
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
}
