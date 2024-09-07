const AppDataSource = require("../config/typeorm");
const userSchema = require("../entity/usersModel");


// Superadmin get all users
const getAllUsers = async (req, res) => {
  const userRepository = AppDataSource.getRepository("users")
  const allUsers = await userRepository.find();

  return res.status(200).send({
    success: true,
    message: "All users data",
    data: allUsers,
  });
  try {
  } catch (error) {
    return res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

// register
const registerUser = async (req, res) => {
  try {
    let { fullName, email, password, adress, phone, userName } = req.body;

    const userRepository = AppDataSource.getRepository("users");
    const existUsers = await userRepository.find({ where: { userName } });

    if (existUsers.length !== 0) {
      return res.status(409).send({
        success: false,
        message: `Already existing`,
      });
    }

    let newUser = userRepository.create({
      fullName,
      email,
      password,
      adress,
      phone,
      userName,
    });
    await userRepository.save(newUser);

    return res.status(200).send({
      success: true,
      message: "User registred successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  registerUser,
};
