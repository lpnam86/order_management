import db from '../models/index.js'
//import { product_code, produc_name, price } from '../models/productModel.js'
const Product = db.products

class productService {

    async createProduct(payload) {
        const product = {
            product_code: payload.product_code,
            product_name: payload.product_name,
            price: payload.price
        }
        const result = await Product.create(product)
        return result
    }

    async getAll() {
        const result = await Product.findAll({
            order: [
                ["id", "ASC"]
            ]
        })
        return result
    }

    async getOnebyId(id) {
        const result = await Product.findByPk(id)
        return result
    }

    async getOnebyCode(product_code) {
        const result = await Product.findAll({
            where: {
                product_code
            }
        })
        return result
    }

    async update(id, data) {
        const result = await Product.update(data, {
            where: { id }
        })
        return result
    }

    async deleteOne(id) {
        const result = await Product.destroy({
            where: { id }
        })
        return result
    }

}
export const productServicee = new productService()

