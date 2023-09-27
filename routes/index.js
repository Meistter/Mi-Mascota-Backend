const productsRouter = require('./products.router')
const express = require('express')
function routerApi(app) {
    const router = express.Router()
app.use('/api/v1',router)
 router.use('/products', productsRouter)

}
// ? Vamos a crear una ruta maestra para poder poner versiones a nuestra API, de esta forma ciertas rutas seran de una version y otras de otra
module.exports = routerApi


// Este modulo es el padre que procesa todos los archivos de routing de esta forma modularizamos mejor las rutas