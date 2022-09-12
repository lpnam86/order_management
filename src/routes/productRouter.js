import express from 'express'
import productController from '../controllers/productController.js'
import { checkToken } from '../middleware/authorization.js'

let routes = express.Router()

routes.post('/', checkToken, productController.createProduct)
routes.get('/', checkToken, productController.getAll)
routes.get('/search', checkToken, productController.getOne)
routes.put('/:id', checkToken, productController.update)
routes.delete('/', checkToken, productController.delete)


export default routes