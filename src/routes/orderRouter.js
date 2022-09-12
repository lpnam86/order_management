
import express from 'express'
import orderController from '../controllers/orderController.js'
import { checkToken } from '../middleware/authorization.js'
let routes = express.Router()

routes.post('/', checkToken, orderController.createOrder)
routes.get('/', checkToken, orderController.getAll)
routes.get('/search', checkToken, orderController.getOne)
routes.put('/:id', checkToken, orderController.updateOrder)
routes.delete('/', checkToken, orderController.deleteOrder)


export default routes