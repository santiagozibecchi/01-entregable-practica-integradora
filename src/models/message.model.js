import mongoose from "mongoose";

const messaggeSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messaggeSchema);
