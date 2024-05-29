import express from "express";
import routes from "./index.js";
import db from "../config/dbConnect.js";
import manipuladorDeErro from "../middlewares/manipuladorDeErro.js"
import manipulador404 from "../middlewares/manipulador404.js";

db.on("error", (erro) => {
  console.log.bind(console, `Erro de conexão - ${erro}`);
});

db.once("open", () => {
  console.error("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json());

routes(app);

app.use(manipuladorDeErro);

app.use(manipulador404)

export default app;