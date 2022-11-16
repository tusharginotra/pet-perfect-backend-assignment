const {verifyEmailAndPassword} = require('../services/auth.service')
const { generateAuthToken} = require("../services/token.service")
const login = async ( req,res)=>{
    const{ email , password} = req.body;
    
    if( email && password )
    {
        let id = verifyEmailAndPassword(email,password)
        if( id )
        {
            try{
            const token = await generateAuthToken(id);
            res.status(200).json({"tokens": token })
            }
            catch(err)
            {
                res.status(404).json(err)
            }
        }
        else
        {
            res.status(404).json({"message" : "User not found"});
        }
    }
    else
    {
        res.status(404).json({"message" :"Please enter email and password "});
    }
}

module.exports = {login}