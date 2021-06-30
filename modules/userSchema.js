const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a person with this prototype
const userSchema =  new Schema({ 
    fname:{ 
        type:String, 
        required:[true,'you have to add first name']
    },
    lname:{ 
        type:String, 
        required:[true,'you have to add last name']
    },
    age:{ 
        type:Number,
        required:[true,'you have to add agg']
    },
    email:{
        type:String,  
        default:"mail@gmail.com",
    },
    password:{
        type:String,
        required:[true,'you have to add password']
    }
})

module.exports = mongoose.model('user',userSchema)
