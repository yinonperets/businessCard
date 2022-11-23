const mongoose = require('mongoose');
const { AddressSchema } = require('./address');
const { imageSchema } = require('./image');


 const defaultString = {
      type: String,
        trim: true,
        minLength: 2,
        maxLength: 100,
        required: true
 };

const cardSchema = new mongoose.Schema({
    title:defaultString,
    subtitle:defaultString,
    phone:{
        type:String,
        match: RegExp(/^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$/g)
    },
    email:{
        type: String,
        trim: true,
        minLength: 5,
        maxLength: 100,
        required: true,
        unique: true
    },
    web:{
        type:String,
         match:RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
        },
    image:imageSchema,
    address: AddressSchema,
       bizNumber:{
            type:Number,
            minLength:9
        },
        createdAt:Date,
        id:mongoose.Types.ObjectId, 
        likes: {
            type:String,
             required:true
        }
   
    });

    module.exports = cardSchema;