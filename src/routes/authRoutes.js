const express = require('express')
const router = express.Router()
const {registerNewUser,loginUser} = require('../controllers/authController')
const { verifyToken } = require('../utils/jwt')

router.post("/register", registerNewUser)
router.post("/login", loginUser)
router.get("/verify", verifyToken,(req, res) => {
  res.json({
    message: "Token is valid. User authenticated.",
    user: req.user,
  })
}
)


module.exports = router