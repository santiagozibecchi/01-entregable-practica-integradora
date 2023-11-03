import mongoose, { Schema } from "mongoose";

const Product = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    quantity: { type: Number, default: 0 },
  },
  { _id: false }
);

const cartSchema = new Schema(
  {
    products: { type: [Product], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
