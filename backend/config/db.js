import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline);
  } catch (err) {
    console.error(`Error in db.js: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;