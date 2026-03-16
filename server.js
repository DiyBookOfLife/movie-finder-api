// imports
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes/movieRoutes";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log("Server is running on " + port);
});
