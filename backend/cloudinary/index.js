import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dtwfksmbt",
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
