
import { productServicee } from "../services/producService.js"

class productController {

    //create product
    async createProduct(req, res, next) {
        const { product_code, product_name, price } = req.body
        try {
            if (!product_code) {
                return res.json('Input product code!')
            }
            else if (!product_name) {
                return res.json('Input product name!')
            }
            else if (!price) {
                return res.json('Input price!')
            }
            else {
                const result = await productServicee.createProduct(req.body)
                res.json(result)
            }
        } catch (error) {
            res.send(error)
        }
    }

    //get all products
    async getAll(req, res, next) {
        try {
            const result = await productServicee.getAll()
            res.json(result)
        } catch (error) {
            res.send(error)
        }
    }

    // //get product by id 
    // async getOnebyId(req, res, next) {
    //     const { id } = req.params
    //     console.log('co id ', id)
    //     try {
    //         if (!id) {
    //             console.log('asd')
    //             return res.json(`Product with id ${id} not found!`)
    //             //return res.json(result)
    //         } else {
    //             const result = await productServicee.getOnebyId(id)
    //             res.json(result)
    //         }
    //     } catch (error) {
    //         res.send(error)
    //     }
    // }


    //get product by code
    async getOne(req, res, next) {
        // const { id } = req.params
        const { id } = req.query
        try {
            if (id) {
                const result = await productServicee.getOnebyId(id)
                return res.json(result)
            } else {
                const result = await productServicee.getOnebyCode(product_code)
                return res.json(result)
            }
        } catch (error) {
            res.send(error)
        }
    }


    //update product
    async update(req, res, next) {
        const { id } = req.params
        try {
            const data = req.body
            const result = await productServicee.update(id, data)
            return res.send('Updated success!')
        } catch (error) {
            res.send(error)
        }
    }

    //delete product 
    async delete(req, res, next) {
        const { id } = req.query
        try {
            const result = await productServicee.deleteOne(id)
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

export default new productController()

