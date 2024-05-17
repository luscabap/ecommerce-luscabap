import express from "express";

const routes = (app) => {
  app.route("/").get((req, res) => {
    try {
      res.status(200).send({ message: "Teste API" });
    } catch (error) {
      res.status(500).send({ error: `Erro - ${error}` })
    }
  });

  app.use(express.json());
}

export default routes;