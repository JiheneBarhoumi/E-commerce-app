import express from "express";
import path from 'path';
import morgan from 'morgan'
import products from "./data/products.js";
//adding colors to the terminal
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//we're using ES6 syntax because we added 'type' : 'module' to the package.json in the main folder

//setting environment variable 1
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


//adding a middleware to the server so to make the req.body in the useController file work
app.use(express.json());

//creating the routes
app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//custom middlware to handle erros
app.use(notFound);

app.use(errorHandler);

//run the server
//setting environment variable 2 => see the .env file

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err
    ? console.log("error in server running", err)
    : console.log(`server is running in ${process.env.NODE_ENV} mode on ${port}`.blue.bold)
);
