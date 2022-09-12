import { reportServicee } from '../services/reportService.js';

class reportController {

    async totalPrice(req, res, next) {
        try {
            const result = await reportServicee.totalPrice()
            return res.json(result)
        } catch (error) {
            res.send(error)
        }
    }

    async orderQuantity(req, res, next) {
        try {
            const result = await reportServicee.orderQuantity()
            return res.json(result)
        } catch (error) {
            res.send(error)
        }
    }

    async productQuantity(req, res, next) {
        try {
            const { products, product_code } = req.body
            const result = await reportServicee.productQuantity(products, product_code)
            return res.json(result)
        } catch (err) {
            res.send(err)
        }
    }

}

export default new reportController()