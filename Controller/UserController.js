const userModel = require("../Moduler/UserModule");

// Get All User Controller
const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Get user faild, Check your api connection!" });
  }
};

// Get Single User Controller
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await userModel.find({ _id: id });
    res.status(200).json(users);
  } catch (error) {
    res.send(500).json({ message: "Get singl user faild!" });
  }
};
// Create User Controller
const createUser = async (req, res) => {
  const { username, email } = req.body;
  const newUser = new userModel({
    username: username,
    email: email,
  });
  try {
    const existUserName = await userModel.findOne({
      username: username,
    });
    if (existUserName) {
      return res
        .status(400)
        .json({ message: "userName is already exist, try again" });
    }
    await newUser.save();
    res
      .status(200)
      .json({ newUser: newUser, message: "user create sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "User create faild!" });
  }
};

// update User Controller
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  const newUser = {
    username: username,
    email: email,
  };
  try {
    await userModel.findByIdAndUpdate(id, newUser, { new: true });
    res
      .status(200)
      .json({ newUser: newUser, message: "User update sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "User update faild" });
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const Users = await userModel.findByIdAndRemove(id);
    res.status(200).json({ Users: Users, message: "User delete sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "User delete faild!" });
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
