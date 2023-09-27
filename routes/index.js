const productsRouter = require('./products.router')
function routerApi(app) {
 app.use('/products', productsRouter)

}

module.exports = routerApi


// Este modulo es el padre que procesa todos los archivos de routing de esta forma modularizamos mejor las rutas