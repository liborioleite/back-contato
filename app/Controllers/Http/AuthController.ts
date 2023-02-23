import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'


export default class AuthController {

    public async register({ request, response }: HttpContextContract) {

        const itemSchema = schema.create({
            email: schema.string(),
            password: schema.string(),
            // remember_me_token: schema.string(),
            username: schema.string(),
            first_name: schema.string(),
            last_name: schema.string(),
            sex: schema.string(),
            job: schema.string(),
            city: schema.string(),
            is_valid: schema.boolean(),
            is_actived: schema.boolean(),
            age: schema.number(),
            balance: schema.number(),
            type: schema.string(),
        })
        const payload = await request.validate({ schema: itemSchema })
        const user = await User.create({
            email: payload.email,
            password: payload.password,
            // remember_me_token: payload.remember_me_token,
            username: payload.username,
            first_name: payload.first_name,
            last_name: payload.last_name,
            sex: payload.sex,
            job: payload.job,
            city: payload.city,
            is_valid: payload.is_valid,
            is_actived: payload.is_actived,
            age: payload.age,
            balance: payload.balance,
            type: payload.type,
        })
        return response.ok(user)

    }

    public async authenticate({ request, auth }: HttpContextContract) {

        const authenticate_Schema = schema.create({

            email: schema.string.optional(),
            username: schema.string(),
            password: schema.string()

        })

        const payload = request.validate({ schema: authenticate_Schema })

        const token = await auth.attempt((await payload).username, (await payload).password)

        return token
    }


}
