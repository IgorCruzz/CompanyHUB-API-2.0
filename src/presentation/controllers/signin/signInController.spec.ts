import { IController } from '@/presentation/protocols'
import { SignInController } from './signIn.controller'

let signInController: IController

describe('SignIn Controller', () => {
  beforeEach(() => {
    signInController = new SignInController()
  })

  it('should be defined', () => {
    expect(signInController).toBeDefined()
  })
})
