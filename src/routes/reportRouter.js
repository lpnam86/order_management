import express from 'express'
import reportController from '../controllers/reportController.js'
import { checkToken } from '../middleware/authorization.js'

let routes = express.Router()

routes.get('/tp', checkToken, reportController.totalPrice)
routes.get('/oq', checkToken, reportController.orderQuantity)
routes.get('/pq', checkToken, reportController.productQuantity)

export default routes