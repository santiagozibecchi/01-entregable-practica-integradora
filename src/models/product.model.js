import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    status: { type: Boolean, default: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnails: { type: Array, default: [] },
  },
  { timestamps: true }
);

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", ProductSchema);
