const { error } = require("console");
const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact.json
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContacts = () => {
  const fileBufer = fs.readFileSync("data/contact.json", "utf-8");
  const data = JSON.parse(fileBufer);
  return data;
};

const saveContact = (nama, email) => {
  const contact = {
    nama,
    email,
  };

  // const fileBufer = fs.readFileSync("data/contact.json", "utf-8");
  // const data = JSON.parse(fileBufer);
  const data = loadContacts();

  //cek duplicate
  const duplicate = data.find((contact) => contact.nama === nama);
  if (duplicate) {
    console.log("name has registered using another name");
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email Format Wrong!");
      return false;
    }
  }

  data.push(contact);

  fs.writeFileSync("data/contact.json", JSON.stringify(data));
  console.log("data has created/updated");
};

const listContacts = () => {
  const data = loadContacts();
  console.log("List Contacts");
  data.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.email}`);
  });
};

const detailContacts = (nama) => {
  const data = loadContacts();
  const contact = data.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log(`${nama} undefine`);
    return false;
  }

  console.log(contact.nama);
  console.log(contact.email);
};

module.exports = { saveContact, listContacts, detailContacts };
