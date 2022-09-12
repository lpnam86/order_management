import db from '../models/index.js'
//import { order_code, order_type, order_status } from '../models/orderModel'
const Order = db.orders

class orderService {

    async create(payload) {
        // const products = []
        const order = {
            order_code: payload.order_code,
            order_type: payload.order_type,
            products: payload.products,
            order_status: payload.order_status,
            quantity: payload.quantity,
            total_price: payload.total_price
        }
        const result = await Order.create(order)
        return result
    }

    async getAll() {
        const result = await Order.findAll({
            order: [
                ["id", "ASC"]
            ]
        })

        if (Array.isArray(result)) {
            result.forEach(r => {
                let product = r.products
                product = product.replace(/{|}/g, '').replace(' ', '').replace(/"|"/g, '')
                const arrayProduct = String(product).split(',')
                r.products = arrayProduct
                return r
            })
        }
        return result
    }

    async getbyId(id) {
        const result = await Order.findByPk(id)
        if (result && result.dataValues) {
            let product = result.dataValues.products
            product = product.replace(/{|}/g, '').replace(' ', '').replace(/"|"/g, '').split(',')
            result.dataValues.products = product
        }
        return result
    }

    async getbyCode(order_code) {
        const result = await Order.findAll({
            where: { order_code }
        })
        if (Array.isArray(result)) {
            result.forEach(r => {
                let product = r.products
                product = product.replace(/{|}/g, '').replace(' ', '').replace(/"|"/g, '')
                const arrayProduct = String(product).split(',')
                r.products = arrayProduct
                return r
            })
        }
        return result
    }

    async getbyType(order_type) {
        const result = await Order.findAll({
            where: { order_type },
            order: [
                ["id", "ASC"]
            ]
        })
        if (Array.isArray(result)) {
            result.forEach(r => {
                let product = r.products
                product = product.replace(/{|}/g, '').replace(' ', '').replace(/"|"/g, '')
                const arrayProduct = String(product).split(',')
                r.products = arrayProduct
                return r
            })
        }
        return result
    }

    async getbyStatus(order_status) {
        const result = await Order.findAll({
            where: { order_status },
            order: [
                ["id", "ASC"]
            ]
        })
        if (Array.isArray(result)) {
            result.forEach(r => {
                let product = r.products
                product = product.replace(/{|}/g, '').replace(' ', '').replace(/"|"/g, '')
                const arrayProduct = String(product).split(',')
                r.products = arrayProduct
                return r
            })
        }
        return result
    }

    async update(id, data) {
        const result = await Order.update(data, {
            where: { id }
        })
        return result
    }

    async delete(id) {
        const result = await Order.destroy({
            where: { id }
        })
        return result
    }
}

export const orderServicee = new orderService()