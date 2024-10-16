const express = require("express");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.json({
    nama: "Mulzahrian",
    email: "ari@gmil.com",
  });
});

app.get("/main", (req, res) => {
  const mahasiswa = [
    {
      nama: "ari",
      email: "arialumi@gmial.com",
    },
    {
      nama: "dafa",
      email: "dafaalumi@gmial.com",
    },
    {
      nama: "adit",
      email: "aditalumi@gmial.com",
    },
  ];
  res.render("index", {
    nama: "mulzahrian",
    title: "ini adalah app belajar node js",
    mahasiswa,
  });
});

//how to run : http://localhost:3000/product/20?category=shoes
app.get("/product/:id/", (req, res) => {
  res.send(
    `Product ID :" + ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.get("/getData", (req, res) => {
  res.render("data");
});

app.get("/updateData", (req, res) => {
  res.render("update");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
