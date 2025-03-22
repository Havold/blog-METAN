import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO)
      .then(() => console.log("CONNECT SUCCESSFULLY"));
  } catch (error) {
    console.log(error);
    throw new Error("CONNECTION FAIL!");
  }
};

export default connect;
