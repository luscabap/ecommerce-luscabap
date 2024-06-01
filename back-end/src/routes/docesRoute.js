import express from "express";
import docesController from "../controller/docesController.js";

const routes = express.Router();

routes.get("/doces", docesController.obterDoces);
routes.get("/doces/:idDoce", docesController.obterDocePorId);
routes.post("/doces/", docesController.criarDoce);
routes.delete("/doces/:idDoceASerDeletado", docesController.deleterDocePorId);

export default routes;