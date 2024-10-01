// const fs = require("fs"); // Core Module
// const cetakNama = require("./module1"); // Local Module
// const moment = require("moment"); // third party module/npm module/node module

const module1 = require("./module1");

console.log(module1);
console.log(module1.cetakNama("ari"), module1.PI);
console.log(module1.data);
console.log("nama saya adalah : " + module1.data.nama);
console.log(module1.teman.cetakTeman());
console.log(new module1.orang());

//cetakNama("Ari");
