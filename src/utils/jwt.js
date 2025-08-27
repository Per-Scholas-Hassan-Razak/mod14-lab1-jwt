const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET
const expiresIn = "1h"

const signToken = (payload) => {
    return jwt.sign(payload, secret, {expiresIn})
}

const verifyToken = (token) => {
    return jwt.verify(token,secret)
}

const decodeToken = (token) => {
    return jwt.decode(token)
}

module.exports = {signToken, verifyToken,decodeToken}