const express = require("express");
const ProductService = require('../services/product.service')

const router = express.Router()
const service = new ProductService()
// para poder usar el servicio debemos crear una instancia de el

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res, next) => { //Aqui estamos definiendo la arrow function como asincrona
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body) //Y al llamar a una funcion asincrona la llamamos con el await
    res.json(product)
  } catch (error) {
    next(error)
  }

})
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
    // const hola = hola() //Este es un error provocado para probar
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({
        message: 'No encontrado' //!Manera nativa de enviar errores
      })
    }
  } catch (error) {
    next(error) //!Al llamar esto le decimos que vaya a ejecutar los middlewares de tipo error que iniciamos en el index.js para manejar los errores
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.delete(id)
    res.json(product)
  } catch (error) {
    next(error) //! Manera usando boom de enviar errores a traves del middleware
  }
})

module.exports = router
