//const express = require("express");
import express from "express";
import {
  icecreamCtrl,
  rolCtrl,
  userCtrl,
  sellCtrl,
} from "./controllers/index.js";

import {
  heladosRoutes,
  rolRoutes,
  userRoutes,
  sellRoutes,
} from "./routes/index.js";

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

// Routes roles
app.get(rolRoutes.GET, rolCtrl.getAll);
app.get(rolRoutes.GET_ONE, rolCtrl.getOne);
app.post(rolRoutes.CREATE, rolCtrl.create);
app.put(rolRoutes.UPDATE, rolCtrl.update);
app.delete(rolRoutes.DELETE, rolCtrl.deleteOne);

// User users
app.route(userRoutes.GET).get(userCtrl.getAll);
app.route(userRoutes.GET_ONE).get(userCtrl.getOne);
app.route(userRoutes.CREATE).post(userCtrl.create);
app.route(userRoutes.UPDATE).put(userCtrl.update);
app.route(userRoutes.DELETE).delete(userCtrl.deleteOne);

app.route(sellRoutes.SELL).post(sellCtrl.sell);

/*
app.route('/ventas')
.get(()=>{})
.post(()=>{})
.put(()=>{})
.delete(()=>{})*/

// Launch server
app.listen(3004, () => {
  console.log("Initialized server...");
});
