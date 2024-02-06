import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

app.get("/notices", (req, res) => {
  const name = req.query["name"];

  if (name) {
    res.send("Bem vindo ao artigo " + name);
  } else {
    res.send("Bem vindo ao blog");
  }
});

//Parametro não obrigatório

app.get("/blog/:article?", (req, res) => {
  const { article } = req.params;

  if (!article) {
    res.send("Bem vindo ao blog");
  } else {
    res.send("Bem vindo ao artigo " + article);
  }
});

//Req = dados enviados pelo usuário
//Res = resposta do servidor

app.get("/user/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Olá ${name}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
