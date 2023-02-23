import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async register({ request, response }: HttpContextContract) {

        //aqui será uma criação de usuário 
        console.log(request, response);

    }

    public async authenticate({ request, response, auth }: HttpContextContract) {
        console.log(request, response, auth);

    }


}
