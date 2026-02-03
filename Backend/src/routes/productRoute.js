import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controller/productController.js";
import { upload } from "../middleware/upload.js";

const productRouter = express.Router();
productRouter.post("/createProduct", upload.single("image"), createProduct);
productRouter.get("/getProduct", getProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.put("/updateProduct/:id", updateProduct);

export default productRouter;
