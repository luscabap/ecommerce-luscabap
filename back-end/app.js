import express from "express";
import routes from "./src/routes/index.js";
import db from "./src/config/dbConnect.js";

db.on("error", (erro) => {
  console.log.bind(console, `Erro de conexão - ${erro}`);
});

db.once("open", () => {
  console.error("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json());

routes(app);

export default app;