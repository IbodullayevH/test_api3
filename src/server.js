const express = require(`express`);
const AppDataSource = require("./config/typeorm");
const router = require("./routes");
const app = express();
const cors = require(`cors`);
require(`dotenv`).config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
  
// The database is connected via typeorm
AppDataSource.initialize()
  .then(() => {
    console.log(`The database is connected via typeorm`);
  })
  .catch((err) => {
    console.log(`AppdataSource: ${err}`);
  });

  
// route
app.use(router);

//port listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serveir run on port ${port}`);
});
