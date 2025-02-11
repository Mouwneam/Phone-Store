import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://phone-store-rosy.vercel.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
