import mongoose, { Types } from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
