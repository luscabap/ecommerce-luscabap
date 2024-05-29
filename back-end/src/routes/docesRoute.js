import express from "express";
import docesController from "../controller/docesController.js";

const routes = express.Router();

routes.get("/doces", docesController.obterDoces);
routes.get("/doces/:idDoce", docesController.obterDocePorId);

export default routes;