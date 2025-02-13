import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
  upload,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);

router.post("/", upload.single("image"), createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
