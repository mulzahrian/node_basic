const yargs = require("yargs");
const { saveContact, listContacts } = require("./contacts");

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

yargs.parse();
