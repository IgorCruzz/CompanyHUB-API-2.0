import { makeActivateUserAccountController } from '@/main/factories/controller/user/activateUserAccount'
import { Router } from 'express'

const routes = Router()

routes.put('/auth/:token', makeActivateUserAccountController())

export default routes
