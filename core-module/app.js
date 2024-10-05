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
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Readline
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact.json
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan Nama anda : ", (nama) => {
      resolve(nama);
    });
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan Email anda : ", (email) => {
      resolve(email);
    });
  });
};

const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
};

// rl.question("siapa nama kamu? ", (answer) => {
//   rl.question("dimana kamu tinggal? ", (live) => {
//     // TODO: Log the answer in a database
//     console.log(`nama kamu adalah : ${answer}`, `kamu tinggal di : ${live}`);
//     const contact = {
//       answer,
//       live,
//     };

//     const fileBufer = fs.readFileSync("data/contact.json", "utf-8");
//     //console.log(fileBufer);
//     const data = JSON.parse(fileBufer);
//     data.push(contact);
//     console.log(data);

//     fs.writeFileSync("data/contact.json", JSON.stringify(data));

//     // fs.writeFile(
//     //   "data/profile.txt",
//     //   `nama kamu adalah : ${answer} kamu tinggal di : ${live}`,
//     //   (err) => {
//     //     console.log("ini adalah error " + err);
//     //   }
//     // );
//     console.log("data has created/updated in profile.txt");
//     rl.close();
//   });
// });
