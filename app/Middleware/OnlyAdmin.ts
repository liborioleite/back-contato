import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OnlyAdmin {
  public async handle({ response, auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    
    let { user } = auth

    if (user?.type == 'user') {

      return response.unauthorized('Nivel de acesso não autorizado!')

    }
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
