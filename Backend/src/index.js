import express from "express";
import cors from "cors";
import { connectDb } from "./db/connect.js";
import productRouter from "./routes/productRoute.js";
const app = express();
const PORT = 9000;

//Connecting to DB
connectDb();

//setting
app.use(express.json());

app.use(cors());

app.use("/image", express.static("../public/images"));

// Base Route
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`App is running at port number ${PORT}`);
});
