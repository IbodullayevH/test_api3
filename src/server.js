require(`reflect-metadata`)
const express = require(`express`)
const AppDataSource = require("./config/typeorm")
const router = require("./routes")
const app = express()
require(`dotenv`).config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// The database is connected via typeorm
AppDataSource
    .initialize()
    .then(() => {console.log(`The database is connected via typeorm`)})
    .catch((err) => {console.log(`AppdataSource:  ${err }`)})

// route
app.use(router)

// 
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server run on port ${port}`);
    
})