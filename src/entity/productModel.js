const { EntitySchema } = require("typeorm");

// Products
const productSchema = new EntitySchema({
  name: "Products", 
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
module.exports = productSchema
