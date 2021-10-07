import mongoose from "mongoose";

const schema = {
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  estado: String,
  id: Number,
  id_rol: String,
};

const Usuarios = mongoose.model("Usuarios", schema);

export default Usuarios;
