//const express = require("express");
import express from "express";
import { icecreamCtrl } from "./controllers/index.js";

import { heladosRoutes } from "./routes/index.js";

console.log("ROUTES ", heladosRoutes);

// Create app
const app = express();

// use json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mi api");
});

// Routes icecream
app.get(heladosRoutes.GET, icecreamCtrl.getAll);
app.get(heladosRoutes.GET_ONE, icecreamCtrl.getOne);
app.post(heladosRoutes.CREATE, icecreamCtrl.create);
app.put(heladosRoutes.UPDATE, icecreamCtrl.update);
app.delete(heladosRoutes.DELETE, icecreamCtrl.deleteOne);

// isers routes

// ...

// Launch server
app.listen(3004, () => {
  console.log("Initialized server...");
});
