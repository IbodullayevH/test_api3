const { EntitySchema } = require("typeorm");

const userSchema = new EntitySchema({
  name: "userM0del",
  
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    fullName: {
      type: "text",
      required: true,
    },
    email: {
      type: "text",
      required: true,
    },
    password: {
      type: "text",
    },
    adress: {
      type: "text",
      required: true,
    },
    phone: {
      type: "varchar",
      length: 100,
      required: true,
    },
    userName: {
      type: "varchar",
      length: 150,
      required: true,
    },
  },
});

module.exports = userSchema;
