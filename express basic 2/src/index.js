const express = require("express");
const app = express();
const { usersRoutes, productsRoutes } = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());
//mengubah chunk tipe data buffer jadi json

const PORT = process.env.PORT;

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("this is express 2");
});

app.listen(PORT, () => {
  console.log("server is running");
});
