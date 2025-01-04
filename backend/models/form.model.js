const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hireSphere')

const formSchema=mongoose.Schema({
    jobName:String,
    company:String,
    job_description:String,


})
module.exports=mongoose.model('Jobform',formSchema)
