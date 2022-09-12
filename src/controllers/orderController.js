import { orderServicee } from "../services/orderService.js"

class orderController {

    //create order 
    async createOrder(req, res, next) {
        try {
            const { order_code, order_type, order_status, products, quantity, total_price } = req.body
            if (!order_code) {
                return res.json('Input order code!')
            }
            else if (!order_type) {
                return res.json('Input order type!')
            }
            else if (!products) {
                return res.json('Input products!')
            }
            else if (!order_status) {
                return res.json('Input order status!')
            }
            else if (!quantity) {
                return res.json('Input quantity!')
            }
            else if (!total_price) {
                return res.json('Input total price!')
            }
            else {
                const result = await orderServicee.create(req.body)
                return res.json(result)
            }
        } catch (error) {
            res.send(error)
        }
    }

    //get all orders
    async getAll(req, res, next) {
        try {
            const result = await orderServicee.getAll()
            res.json(result)
        } catch (error) {
            res.send(error)
        }
    }

    // //get order by id 
    // async getOnebyId(req, res, next) {
    //     const { id } = req.params
    //     try {
    //         if (!(id * 1)) {
    //             return res.send(`Id not found!`)
    //         } else {
    //             const result = await orderServicee.getbyId(id)
    //             res.json(result)
    //         }
    //     } catch (error) {
    //         res.send(error)
    //     }
    // }

    //get order by query
    async getOne(req, res, next) {
        const { id, order_code, order_type, order_status } = req.query
        try {
            if (id) {
                const result = await orderServicee.getbyId(id)
                return res.json(result)
            }
            else if (order_code) {
                const result = await orderServicee.getbyCode(order_code)
                return res.json(result)
            }
            else if (order_type) {
                const result = await orderServicee.getbyType(order_type)
                return res.json(result)
            }
            else {
                const result = await orderServicee.getbyStatus(order_status)
                return res.json(result)
            }
        } catch (error) {
            res.send(error)
        }
    }

    //update order 
    async updateOrder(req, res, next) {
        const { id } = req.params
        try {
            const data = req.body
            const result = await orderServicee.update(id, data)
            return res.send('Updated success!')
        } catch (error) {
            res.send(error)
        }
    }

    //delete order
    async deleteOrder(req, res, next) {
        const { id } = req.query
        try {
            const result = await orderServicee.delete(id)
            if (result !== 0) {
                return res.send('Deleted success!')
            } else {
                return res.send('Deleted not success!')
            }
        } catch (error) {
            res.send(error)
        }
    }
}

export default new orderController()