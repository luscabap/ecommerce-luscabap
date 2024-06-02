import mongoose from "mongoose";

const doceSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true] },
  preco: { type: Number, required: [true] },
  slug: { type: String, required: [true] },
  foto: { type: String, required: [true] },
  categoria: { type: String, required: [true] },
  peso: { type: Number, required: [true] },
  serve: { type: Number, required: [true] }
}, { versionKey: false });

const doce = mongoose.model("doces", doceSchema);

export default doce;