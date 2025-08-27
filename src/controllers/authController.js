const handleError = require("../utils/handleError")
const {createUser, login} = require("../services/authServices")

const registerNewUser = async(req, res) => {
    try{
        const {username, email, password} = req.body;
        const newUser = await createUser(username, email, password)
        res.status(201).json(newUser)
    }catch(err){
        handleError(res,err)
       
    }

}

const loginUser = async(req,res) => {
    try{
        const {email, password} = req.body
        const user = await login(email,password)
        res.status(200).json(user)
    }catch(err){
        handleError(res,err)
    }
}


module.exports = {registerNewUser, loginUser}