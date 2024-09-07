const { DataSource } = require("typeorm");
require(`dotenv`).config()
const entities = require(`../entity`)

const AppDataSource = new DataSource({
    type: "postgres",
    url:process.env.URL, // Connection String
    entities: entities,
    synchronize: false,
    logging: false,
  });


  module.exports = AppDataSource