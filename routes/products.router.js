const express = require("express");
const ProductService = require('../services/product.service')

const router = express.Router()
const service = new ProductService()
// para poder usar el servicio debemos crear una instancia de el

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})
router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  if(product)
  {
    res.json(product)
  }else{
    res.status(404).json({
    message: 'No encontrado'
    })
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const product = service.delete(id)
  res.json(product)
})

module.exports = router
