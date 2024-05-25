import "dotenv/config";
import app from "./app.js";

const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});