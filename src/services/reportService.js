import sequelize, { QueryTypes } from 'sequelize'
import db from '../models/index.js'
//import cache from '../configs/redisConfig'

const Product = db.products
const Order = db.orders

class reportService {

    // async totalPrice() {
    //     console.log('asf')
    //     const result = await Order.findAll({
    //         attributes: [sequelize.fn('sum', sequelize.col('total_price')), 'totalPrice'],
    //         // where: '',
    //     })
    //     return result
    // }

    async totalPrice() {
        const result = await sequelize.query("SELECT SUM(total_price) AS totalPrice from `orders`", {
            type: QueryTypes.SELECT
        })
        console.log(result)
        return result
    }

    // async orderQuantity() {
    //     const result = await Order.count({
    //         col: 'id',
    //     })
    //     return result
    // }

    async orderQuantity() {
        const result = await sequelize.query('SELECT COUNT(id) FROM orders', { type: QueryTypes.SELECT })
        console.log(result)
        // return result
    }

    joinTable(order, produc, products, product_code) {
        let sql = `SELECT orders.products, products.product_code
                   FROM "products"      
                   INNER JOIN "orders" 
                   ON products.product_code = ANY(orders.products)
                   WHERE `
        return this.raw(sql, { products, product_code })
    }




    async productQuantity() {
        const result = await joinTable.count({
            col: 'Product_code',
        })
        return result
    }

}

export const reportServicee = new reportService()

