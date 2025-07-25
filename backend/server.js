import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import { config } from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

config({
    path:"./.env"
})

//app configuration
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Started on ${process.env.PORT}`)
})

//mongodb+srv://greatstack:9935521297@cluster0.bmts8ke.mongodb.net/?