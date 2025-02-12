import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const allowlist = [
  "http://localhost:5173",
  "https://phone-store-rosy.vercel.app",
];

/*const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin); // Send back the actual origin
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies if needed
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
*/

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow us to accept JSON data in the req.body

app.use("/api/products", cors(corsOptionsDelegate), productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
