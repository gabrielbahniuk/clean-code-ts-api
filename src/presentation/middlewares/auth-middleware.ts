import { HttpRequest, HttpResponse, Middleware, LoadAccountByToken } from './auth-middleware-protocols'
import { forbidden, serverError, success } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByTokenStub: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByTokenStub.load(accessToken, this.role)
        if (account) {
          return success({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
