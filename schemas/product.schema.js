const Joi = require('joi')

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)

//! Este esquema hecho con Joi lo que nos permite es validar facilmente el formato de la informacion que recibimos del cliente
//! Verificando asi que nos envie todo lo requerido y en caso de no hacerlo enviar un mensaje avisando
const getProductSchema = Joi.object({
    id: id.required()
})

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required()
})

const updateProductSchema = Joi.object({
    name: name,
    price: price
})

GitModule.exports = { createProductSchema, updateProductSchema, getProductSchema}