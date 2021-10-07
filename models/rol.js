import mongoose from "mongoose";

const schema = {
  nombre: String,
  descripcion: String,
  id_rol: String,
};

const Rol = mongoose.model("Rol", schema, "rol");

export default Rol;
