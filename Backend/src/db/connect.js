import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/h58_Crud");
    console.log(`Database connected successfully!`);
  } catch (e) {
    console.log(`Error while connecting Database ${e}`);
  }
};
