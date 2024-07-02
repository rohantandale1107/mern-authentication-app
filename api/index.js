import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Errorconnecting to MongoDB:", err.message));

const app = express();

app.listen(3000, () => {
  console.log("Port is listening on 3000!");
});

app.use("/api/user", userRoutes)