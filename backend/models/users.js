const { required } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  phone: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  speciality: {
    type: String,
  },
  createdAt: {
    type: Date,
    defaultStatus: Date.now,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

UserSchema.methods.createToken = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

UserSchema.methods.comparePassword = function (canditatePassword) {
  return bcrypt.compareSync(canditatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
