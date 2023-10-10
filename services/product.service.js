const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')
class ProductService {

    constructor() {
        this.products = []
        this.generate() //generamos elementos al iniciar el servicio
    }
    async generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.url()
            })
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }

    async find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 5000)
        })
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id)
        if (!product) {
            throw boom.notFound('product not found')
        } else {
            return this.product
        }
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('product not found')
            //El uso de el boom en este caso nos permite definir errores de forma mas natural y la libreria se encarga de mostrar el codigo correspondiente al error al cliente
        } else {
            const product = this.products[index]

            this.products[index] = {
                ...product,
                ...changes
            }
            return this.products[index]
        }

    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('product not found') //lanzamos el error
        } else {
            this.products.splice(index, 1) //eliminamos un elemento luego del indice dado
            return { message: true, id: id }
        }
    }
}

module.exports = ProductService