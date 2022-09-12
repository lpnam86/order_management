import express from 'express'
//import path from 'path'
import configviewEngine from './configs/viewEngine.js'
import db from './models/index.js'



import productRouter from './routes/productRouter.js'
import orderRouter from './routes/orderRouter.js'
import reportRouter from './routes/reportRouter.js'


const app = express()

//app json request body
app.use(express.json())

//parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

//config app
configviewEngine(app)

//connect database
db.sequelize.sync()
//testing database
db.sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully!')
    })
    .catch((error) => {
        console.log('Unable to connect database!', error)
    })



app.use('/order', orderRouter)
app.use('/product', productRouter)
app.use('/report', reportRouter)

//app.use(express.static(path.join(__dirname, 'public')))

const port = 3000

app.listen(port, () => {
    console.log('App running on port: ' + port)
})

export default app