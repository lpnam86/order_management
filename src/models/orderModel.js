export const orderModel = (sequelize, Sequelize) => {
    const orders = sequelize.define("orders", {

        order_code: {
            type: Sequelize.STRING
        },
        order_type: {
            type: Sequelize.STRING
        },
        products: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            defaultValue: []
        },
        order_status: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        total_price: {
            type: Sequelize.FLOAT
        },
    })

    return orders
}