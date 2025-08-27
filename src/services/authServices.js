const User = require("../models/User");

const createUser = async (username, email, password) => {
  const newUser = await User.create({ username, email, password });
  return newUser;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Incorrect email or password.");
    error.statusCode = 400;
    throw error;
  }

  const match = await user.isCorrectPassword(password)
  console.log("match value", match)
  if(!match){
    const error = new Error("Incorrect email or password.");
    error.statusCode = 400;
    throw error;
  }

  return user
};

module.exports = { createUser, login };
