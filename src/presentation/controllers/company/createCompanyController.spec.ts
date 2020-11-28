import { IController } from '@/presentation/protocols'
import { CreateCompanyController } from './createCompany.controller'

let createCompanyController: IController

describe('CreateCompany Conroller', () => {
  beforeEach(() => {
    createCompanyController = new CreateCompanyController()
  })

  it('should be defined', () => {
    expect(createCompanyController).toBeDefined()
  })
})
