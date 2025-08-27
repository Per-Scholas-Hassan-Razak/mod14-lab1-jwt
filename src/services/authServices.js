const User = require("../models/User");
const {signToken} = require("../utils/jwt")

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
  if(!match){
    const error = new Error("Incorrect email or password.");
    error.statusCode = 400;
    throw error;
  }

 const payload = { _id: user._id, username: user.username };
  const token = signToken(payload); 

  return {
    token,
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
  };


};

module.exports = { createUser, login };
