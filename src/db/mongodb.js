import mongoose from "mongoose";

export const initMongoDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI);
    console.log("Database conected 🚀");
  } catch (error) {
    console.log(
      "Ah ocurrido un error al intentar conectarnos a la DB",
      error.message
    );
  }
};
