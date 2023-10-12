const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
   return (req, res, next) => {
        const data = req[property]     //property tiene los datos que vienen por params o por body etc   
        const error = schema.validate(data)
        if(error) {
            next(boom.badRequest(error))
        }
        next()
   }
}

//
module.exports = {validatorHandler}