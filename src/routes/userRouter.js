const { getAllUsers, registerUser } = require("../controllers/userController")

const userRouter = require(`express`).Router()

userRouter.get("/", getAllUsers)
userRouter.post("/user/register", registerUser)

module.exports = userRouter