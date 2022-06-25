import Product from '../models/product.model.js'

export const getProducts = async (request, reply) => {
    const products = await Product.find()
    return reply.code(200).send(products)
}

export const getProduct = async (request, reply) => {
    console.log(request.params.id);
    const product = await Product.findById(request.params.id)
    return reply.code(200).send(product)
}

export const createProduct = async (request, reply) => {
    const newProduct = new Product(request.body)
    await newProduct.save()
    return reply.code(201).send(newProduct)
}

export const updateProduct = async (request, reply) => {
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true})
    return reply.code(200).send(product)
}

export const deleteProduct = async (request, reply) => {
    await Product.findByIdAndDelete(request.params.id)
    return reply.code(204).send();
}

/**
 * * CODIGOS USADOS
 * 
 * * Code 200 OK
 * La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP
 * 
 * * Code 201 Created
 * La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello.
 * Ésta es típicamente la respuesta enviada después de una petición PUT.
 * * * Code 204 No Content
 * La petición se ha completado con éxito pero su respuesta no tiene ningún contenido,
 * aunque los encabezados pueden ser útiles.
 * El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.
 * 
 */