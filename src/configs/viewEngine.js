import express from 'express'

const configViewEngine = (app) => {
    app.use(express.static("./src/public"))
    app.set("viewEngine", "ejs")
    app.set("view", "./src/view")
}

export default configViewEngine