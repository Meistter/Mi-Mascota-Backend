function logErrors(error, req, res, next) {
    console.error(error);
    next(error) //estamos enviandolo a un middleware de tipo error ya que le enviamos un error
}
function errorHandler(error, req, res, next) { //los 4 parametros siempre van asi no usemos el next
       res.status(500).json({
        message: error.message,
        stack: error.stack
    }
    )
    next(error) //estamos enviandolo a un middleware de tipo error ya que le enviamos un error 
}

module.exports = { logErrors, errorHandler }