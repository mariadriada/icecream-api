import mongoose from "mongoose";

const schema = {
  nombre: String,
  sabor: String,
  precio: Number,
  id_helado: Number,
};

const Helados = mongoose.model("Helados", schema);

export default Helados;
