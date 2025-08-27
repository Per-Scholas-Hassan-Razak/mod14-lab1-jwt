const handleError = require("../utils/handleError")
const {createUser} = require("../services/authServices")

const registerNewUser = async(req, res) => {
    try{
        const {username, email, password} = req.body;
        const newUser = await createUser(username, email, password)
        res.status(201).json(newUser)
    }catch(err){
        handleError(res,err)
       
    }

}

module.exports = {registerNewUser}