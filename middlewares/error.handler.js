function logErrors(error, req, res, next) {
    next(error) //estamos enviandolo a un middleware de tipo error (al siguiente en el orden en que definimos en el index.js) ya que le enviamos un error
}
function errorHandler(error, req, res, next) { //los 4 parametros siempre van asi no usemos el next
    res.status(500).json({
        message: error.message,
        stack: error.stack
    }
    )
    next(error) //estamos enviandolo a un middleware de tipo error ya que le enviamos un error 
}

//! Para poder hacer uso de boom para manejar los errores nuestro middleware manejador de errores debe tener uno para cuando sea de tipo boom
//! ya que el error de tipo boom trae dentro sus caracteristicas y su codigo de retorno, entonces no definiremos siempre un error 500 si no el que traiga el boom
//! si no es tipo boom entonces continua al siguiente middleware que enviara un error 500

function boomErrorHandler(error, req, res, next) {
    if (error.isBoom) {
        const { output } = error
        res.status(output.statusCode).json(output.payload)
    }else {       
        next(error)
    }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }