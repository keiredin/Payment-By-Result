const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSalt(10);
  return bcrypt.hashSync(password, hash);
};

module.exports = hashPassword;
