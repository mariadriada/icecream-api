import mongoose from "mongoose";

const schema = {
  fecha: Date,
  valor: Number,
};

const Sells = mongoose.model("Ventas", schema);

export default Sells;
