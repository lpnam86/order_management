import dbConfig from '../configs/db.config.js'
import { Sequelize } from 'sequelize'
import { productModel } from './productModel.js'
import { orderModel } from './orderModel.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliasesL: false,

    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
})

const db = {}



db.Sequelize = Sequelize
db.sequelize = sequelize

db.orders = orderModel(sequelize, Sequelize)
db.products = productModel(sequelize, Sequelize)

export default db








