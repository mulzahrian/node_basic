const yargs = require("yargs");
const { saveContact, listContacts, detailContacts } = require("./contacts");

yargs
  .command({
    command: "add",
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
      saveContact(argv.nama, argv.email);
    },
  })
  .demandCommand();

//show all contact name
yargs.command({
  command: "list",
  describe: "show all contact data",
  handler() {
    listContacts();
  },
});

//show detail contact
yargs.command({
  command: "detail",
  describe: "show detail by name",
  builder: {
    nama: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContacts(argv.nama);
  },
});

//delete data by name
yargs.command({
  command: "delete",
  describe: "delete by name",
  builder: {
    nama: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContacts(argv.nama);
  },
});
yargs.parse();
