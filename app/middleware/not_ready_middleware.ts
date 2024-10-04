import env from '#start/env'
import { Env } from '@adonisjs/core/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class NotReadyMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    console.log(ctx)

    const showLaunchPage = env.get('SHOW_LAUNCH_PAGE')
    if (showLaunchPage) {
      return ctx.inertia.render('denied_access')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
