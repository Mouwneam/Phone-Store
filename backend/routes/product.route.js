import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.get("/", getProduct);

router.post("/", upload.single("image"), createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
