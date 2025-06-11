import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/test`
    );
    console.log(
      "MongoDB connected successfully:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};
export default connectDB;
