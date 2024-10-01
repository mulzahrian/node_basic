function cetakNama(nama) {
  return `Halo,Nama saya adalah ${nama}`;
}

const PI = 3.14;

const data = {
  nama: "ari",
  umur: 25,
  pekerjaan: "Progammer",
};

const teman = {
  nama: "dafa",
  umur: 23,
  pekerjaan: "Progammer",
  cetakTeman() {
    return `Halo,Nama teman saya ${this.nama} dan umur teman saya ${this.umur} dia bekerja sebagai ${this.pekerjaan}`;
  },
};

class orang {
  constructor() {
    console.log("Object orang telah dibuat");
  }
}
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.data = data;
// module.exports.teman = teman;
// module.exports.orang = orang;

//kirim object export secara banyak

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   data: data,
//   teman: teman,
//   orang: orang,
// };

//atau cara lebih gampang

module.exports = {
  cetakNama,
  PI,
  data,
  teman,
  orang,
};
