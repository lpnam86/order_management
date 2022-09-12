export const productModel = (sequelize, Sequelize) => {
    const products = sequelize.define("products", {

        product_code: {
            type: Sequelize.STRING
        },
        product_name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        }
    })

    return products
}