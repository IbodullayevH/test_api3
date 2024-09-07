require(`reflect-metadata`)
const { DataSource } = require("typeorm");
const userSchema = require("../entity/usersModel");
const productSchema = require("../entity/productModel");
require(`dotenv`).config();

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.URL, // Connection String
  entities: [userSchema, productSchema],
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false, // SSL sertifikatini tekshirmaslik uchun
  },
});

module.exports = AppDataSource;
