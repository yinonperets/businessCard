const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
   image: {
        url:{ 
        type:String,
        match:RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
           },  
        alt:{
            type:String,
             minLength:2
        }

    }
})

module.exports = imageSchema;