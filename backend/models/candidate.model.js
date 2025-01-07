const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/hireSphere')

const candidateSchema=new mongoose.Schema({
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
    skills:{
        type:String,
        required:true,
        trim:true
    },
    resume: { 
        type: String,
        required:true 
      }, // Default role
})
module.exports=mongoose.model('Candidate',candidateSchema)