const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/hireSphere')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role: { 
        type: String, 
        enum: ["admin", "employer", "job_seeker"], 
        default: "job_seeker" 
      }, // Default role
})
module.exports=mongoose.model('User',userSchema)