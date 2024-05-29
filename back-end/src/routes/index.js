import express from "express";
import doces from "./docesRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    try {
      res.status(200).send({ message: "Teste API" });
    } catch (error) {
      res.status(500).send({ error: `Erro - ${error}` })
    }
  });

  app.use(express.json(), doces);
}

export default routes;