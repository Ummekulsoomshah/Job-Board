const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hireSphere')

const formSchema=mongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    }


})
module.exports=mongoose.model('Jobform',formSchema)
