require("dotenv").config();
const jwt = require("jsonwebtoken");
const {UserModel} = require("../models/UserModel");

module.exports.userVerification = (req,res,next)=>{
    const authHeader = req.cookies.token;
    // if(!authHeader){
    //     return res.json({message : "Unauthorised : No token"})
    // }
    // jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
    //     if(err){
    //         return res.json({message : "Forbidden : Invalid token "})
    //     }
    //     else{
    //         let user = await UserModel.findById(data.id);
    //         if(user) {next()}
    //         else return res.cookie("verify" , false)
    //     }
    // })
    // console.log(authHeader);
    next();
}