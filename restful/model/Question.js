const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        required:true,
    },
    note:{
        type:String
    }
})

mongoose.model('Question',questionSchema)