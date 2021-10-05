//var mongoose = require("mongoose");

import mongoose from "mongoose";

const db = {
  connect: function () {
    mongoose.connect(
      "mongodb+srv://bduser:Contadia2020@cluster0.0oz81.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );

    mongoose.connection.on("error", function (e) {
      console.error(e);
    });
  },
};

export default db;
