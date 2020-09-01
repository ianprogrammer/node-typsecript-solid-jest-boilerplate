import { Controller, HttpRequest, HttpResponse, Validation } from './login-controller-protocols'
import { badRequest, serverError, unauthorized, ok } from '@/presentation/helpers/http/http-helper'

export class LoginController implements Controller {
  constructor(
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body

      return ok({ message: 'ok' })
    } catch (error) {
      return serverError(error)
    }
  }
}
