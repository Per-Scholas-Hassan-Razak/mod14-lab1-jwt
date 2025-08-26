const registerNewUser = async(req, res) => {
    try{
        const data = req.body;
        const newUser = await createUser(data)
        res.status(201).json(newUser)
    }catch(err){
        console.error("unable to create new user", err.message)
    }

}

module.exports = {registerNewUser}