const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");

const { User } = require("../models/");
const { BadRequestError, UnauthenticatedError } = require("../errors/");

const login = async (req, res) => {
  const { email, password: password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new UnauthenticatedError("Invalid Email or Password!");
  }

  const token = user.createToken();
  const { _id, name, role } = user;
  res.status(StatusCodes.OK).json({ user: { _id, name, role, email }, token });
};

const register = async (req, res) => {
  const user = await User.create(req.body);
  const { _id, name, role, email } = user;
  const token = user.createToken();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { _id, name, role, email }, token });
};

module.exports = {
  login,
  register,
};
