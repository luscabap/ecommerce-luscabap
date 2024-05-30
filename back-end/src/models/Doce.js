import mongoose from "mongoose";

const doceSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String },
  preco: { type: Number },
  slug: { type: String },
  foto: { type: String },
  categoria: { type: String },
  peso: { type: Number },
  serve: { type: Number }
}, { versionKey: false });

const doce = mongoose.model("doces", doceSchema);

export default doce;