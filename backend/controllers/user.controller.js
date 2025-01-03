const userModel=require('../models/user.model')

module.exports.register=async (req,res,next)=>{
    const {name,email,password}=req.body
    const user=await userModel.create({
        name,
        email,
        password
    })
    res.status(201).json({
        message:'User created successfully',
        user
    })
}