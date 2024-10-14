const http = require("http");
const fs = require("fs");
const port = 3000;

const rederHtml = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File : Not Found!");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    // if (url === "/getData") {
    //   rederHtml("./data.html", res);
    // } else if (url === "/updateData") {
    //   rederHtml("./update.html", res);
    //   //   res.write("<h1>data get updated</h1>");
    //   //   res.end();
    // } else {
    //   //res.write("Hellow");
    //   rederHtml("./index.html", res);
    // }
    switch (url) {
      case "/getData":
        rederHtml("./data.html", res);
        break;
      case "/updateData":
        rederHtml("./update.html", res);
        break;
      default:
        rederHtml("./index.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server listening in port ${port}...`);
  });
