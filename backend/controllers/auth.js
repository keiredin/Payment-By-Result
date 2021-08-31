const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const { User } = require("../models/");
const { hashPassword } = require("./utils");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!username || !password) {
    throw new Error("please provide email and password!");
  }

  const hashedPassword = hashPassword(password);
  const user = await User.findOne({ email });

  if (!user || !bcrypt.compareSync(hashedPassword, user.password)) {
    throw new Error("Wrong email or password!");
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ token });
};

module.exports = {
  login,
};
