/**
 * * https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server
 */
import Fastify from 'fastify'
import 'dotenv/config'

import productRoutes from './routes/product.route.js'
import './databases/database.js'

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '127.0.0.1'

const fastify = Fastify({
  logger: true
})

productRoutes.forEach((route) => {
  fastify.route(route)
});

const start = async () => {
    try {
      await fastify.listen({ port: PORT, host: HOST })
      console.log(`Server on http://${HOST}:${PORT}/products`);
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }

start()