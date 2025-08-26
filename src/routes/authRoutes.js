const express = require('express')
const router = express.Router()
const {registerNewUser} = require('../controllers/authController')

router.post("/register", registerNewUser)
router.post("/login", (req, res) => {
    console.log( `login route`)
})


module.exports = router