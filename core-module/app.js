const { writeQustion, saveContact } = require("./contacts");

const main = async () => {
  const nama = await writeQustion("Masukkan Nama Anda : ");
  const email = await writeQustion("Masukkan Email Anda : ");

  saveContact(nama, email);
};

main();
