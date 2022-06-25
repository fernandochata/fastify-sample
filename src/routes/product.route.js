import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'

export default [
    {
        url: '/products',
        method: 'GET',
        handler: getProducts
    },{
        url: '/products/:id',
        method: 'GET',
        handler: getProduct
    },{
        url: '/products',
        method: 'POST',
        handler: createProduct
    },{
        url: '/products/:id',
        method: 'PUT',
        handler: updateProduct
    },{
        url: '/products/:id',
        method: 'DELETE',
        handler: deleteProduct
    }


]