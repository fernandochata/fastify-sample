import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controlller.js'

export default [
    {
        url: '/products',
        method: 'GET',
        handler: getProducts
    },{
        url: '/product/:id',
        method: 'GET',
        handler: getProduct
    },{
        url: '/products',
        method: 'POST',
        handler: (request, reply) => {
            reply.send('create products')
        }
    },{
        url: '/products/:id',
        method: 'PUT',
        handler: (request, reply) => {
            reply.send('update product')
        }
    },{
        url: '/products/:id',
        method: 'DELETE',
        handler: (request, reply) => {
            reply.send('delete product')
        }
    }


]