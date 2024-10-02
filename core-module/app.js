//Core Module
//File System

const { error } = require("console");
const fs = require("fs");

//console.log(fs);

//menuliskan string ke file secara sync
// try {
//   fs.writeFileSync("data/test.txt", "file ini dibuat secara syncronus");
// } catch (e) {
//   console.log("ini adalah error nya" + e);
// }

//menuliskan string ke file secara async
// fs.writeFile("data1/test1.txt", "ini adalah text kedua di testing", (err) => {
//   console.log("ini adalah error " + err);
// });

//membaca file syn
// const cetak = fs.readFileSync("data/test.txt", "utf-8");
// console.log(cetak);

//membaca file asyn
fs.readFile("data/test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
