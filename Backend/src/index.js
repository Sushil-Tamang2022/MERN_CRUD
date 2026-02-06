import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
const app = express();
const PORT = 9000;

//Connecting to DB


//setting
app.use(express.json());

app.use(cors());

app.use("/image", express.static("../public/images"));

// Base Route for product
app.use("/api/product", productRouter);
// Base Route for user

app.use("/api/user", userRouter);

connectDB()

app.listen(PORT, () => {
  console.log(`App is running at port number ${PORT}`);
});
