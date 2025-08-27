const User = require("../models/User");

const createUser = async (username, email, password) => {
  const newUser = await User.create({ username, email, password });
  return newUser;
};

module.exports = { createUser };
