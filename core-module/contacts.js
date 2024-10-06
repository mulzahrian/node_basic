const { error } = require("console");
const fs = require("fs");

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

const writeQustion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (nama) => {
      resolve(nama);
    });
  });
};

const saveContact = (nama, email) => {
  const contact = {
    nama,
    email,
  };

  const fileBufer = fs.readFileSync("data/contact.json", "utf-8");
  const data = JSON.parse(fileBufer);
  data.push(contact);

  fs.writeFileSync("data/contact.json", JSON.stringify(data));
  console.log("data has created/updated");
  rl.close();
};

module.exports = { writeQustion, saveContact };
