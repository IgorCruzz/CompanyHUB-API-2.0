import { badRequest } from './components/bad-request'
import { forbidden } from './components/forbidden'
import { serverError } from './components/server-error'
import { notFound } from './components/not-found'
import { unauthorized } from './components/unauthorized'
import { apiKeyAuthSchema } from './schemas/results/apiKey/api-key-aut-schema'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema,
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
}
