// model users

const { EntitySchema } = require("typeorm");


// Users
const userModel = new EntitySchema({
  name: "UserTable", // Jadval nomi
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
      required:true
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


// Products
const productModel = new EntitySchema({
  name: "Product", // Jadval nomi
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    productName: {
      type: "varchar",
      nullable: false, // Bo'sh qolishi mumkin emas
      required: true, // Kod darajasida majburiy qilish (formalar va validatsiya uchun)
    },
    price: {
      type: "float",
    },
    description: {
      type: "text",
    },
  },
});

// exports
module.exports = {
  userModel,
  productModel,
};
