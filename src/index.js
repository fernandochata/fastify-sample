/**
 * * https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server
 */
import Fastify from 'fastify'

import productRoutes from './routes/product.route.js'
import './databases/database.js'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  productRoutes.forEach((route) => {
    fastify.route(route)
  });

const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()