import Product from '../models/product.model.js'

export const getProducts = async (request, reply) => {
    const products = await Product.find()
    return reply.code(200).send(products)
}

export const getProduct = async (request, reply) => {
    const product = await Product.findById(request.params.id)
    return reply.code(200).send(product)
}

export const createProduct = async (request, reply) => {
    const newProduct = new Product(request.body)
    await newProduct.save()
    return reply.code(201).send(newProduct)
}

export const updateProduct = async (request, reply) => {
    const product = await Product.findById(request.params.id, request.body, {new: true})
    return reply.code(200).send(product)
}

export const deleteProduct = async (request, reply) => {
    await Product.findByIdAndDelete(request.params.id)
    return send()
}