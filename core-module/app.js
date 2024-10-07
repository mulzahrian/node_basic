const yargs = require("yargs");

yargs.command({
  conmmand: "add",
  describe: "add new contact",
  builder: {
    nama: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      nama: argv.nama,
      email: argv.email,
    };
    console.log(contact);
  },
});

yargs.parse();
