import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = {
  cantidad: Number,
  id_helado: Schema.Types.ObjectId,
  id_venta: Schema.Types.ObjectId,
  precio: Number,
};

const SoldIcecreams = mongoose.model("helados_vendidos", schema);

export default SoldIcecreams;
