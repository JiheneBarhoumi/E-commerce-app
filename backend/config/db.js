import mongoose from "mongoose";

//databse configuration file

const connectDB = async () => {
  try {
    const connec = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${connec.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error found: ${error.message}`.red.bold);
    process.exit(1);
    //process.exit(1): exit with failure
  }
};

export default connectDB;
