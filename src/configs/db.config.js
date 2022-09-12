export default {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Luyennam123!",
    DB: "Order management",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}