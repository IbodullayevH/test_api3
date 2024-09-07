const { EntitySchema } = require("typeorm");

const userSchema = new EntitySchema({
  name: "users",

  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true, // Avtomatik ravishda ID yaratadi
    },
    fullName: {
      type: "text", // Bu ustun "varchar" turidagi ma'lumotni saqlaydi
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
