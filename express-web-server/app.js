const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    nama: "Mulzahrian",
    email: "ari@gmil.com",
  });
  //res.send("Hello World!");
});

app.get("/main", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

//how to run : http://localhost:3000/product/20?category=shoes
app.get("/product/:id/", (req, res) => {
  res.send(
    `Product ID :" + ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.get("/getData", (req, res) => {
  res.sendFile("./data.html", { root: __dirname });
});

app.get("/updateData", (req, res) => {
  res.sendFile("./update.html", { root: __dirname });
});

app.get("/data", (req, res) => {
  res.send("this Page for Data");
});
app.get("/update", (req, res) => {
  res.send("this Page has Updated");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
