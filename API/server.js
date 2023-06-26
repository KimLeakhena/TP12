import express from "express"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from "./connectdb.js"

import categoryRouter from "./router/CategoryRouter.js"
import subcategoryRouter from "./router/SubCategoryRouter.js"
import productRouter from "./router/ProductRouter.js"
import UsersRouter from "./router/UsersRouter.js"

const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/category', categoryRouter)
app.use('/subcategory', subcategoryRouter)
app.use('/product', productRouter)
app.use('/user',UsersRouter)

app.listen(3000, () => {
    console.log("Server is starting now ...")
    connectDB()
})