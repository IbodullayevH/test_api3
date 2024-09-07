const { getAllUsers, registerUser } = require("../controllers/userController")

const userRouter = require(`express`).Router()

userRouter.get("/user/all", getAllUsers)
userRouter.post("/user/register", registerUser)

module.exports = userRouter