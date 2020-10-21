import express from "express";
import products from "./data/products.js";
//adding colors to the terminal
import colors from "colors";
import connectDB from "./config/db.js";

//we're using ES6 syntax because we added 'type' : 'module' to the package.json in the main folder

//setting environment variable 1
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
//creating the routes
app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

//run the server
//setting environment variable 2 => see the .env file

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err
    ? console.log("error in server running", err)
    : console.log(`server is running in ${process.env.NODE_ENV} mode on ${port}`.blue.bold)
);
