import { makeLoginValidation } from './login-validation-factory'

import { Controller } from '@/presentation/interfaces'
import { LoginController } from '@/presentation/controllers/login/login/login-controller'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeLoginValidation())
  return controller
}
