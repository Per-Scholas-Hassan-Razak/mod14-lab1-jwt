const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET
const expiresIn = "1h"

const signToken = (payload) => {
    return jwt.sign(payload, secret, {expiresIn})
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(401).json({error:"No token provide or invalid login"})
    }
    const token = authHeader.split(" ")[1]
      try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token is invalid or expired" });
  }
}

const decodeToken = (token) => {
    return jwt.decode(token)
}

module.exports = {signToken, verifyToken,decodeToken}