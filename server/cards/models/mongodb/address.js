const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({

        state:{
            type:String,
             minLength:2
        },
        country:{
            type:String,
             minLength:2,
             required:true
        },
        city:{
            type:String,
             minLength:2,
             required:true
        },
        street: {
            type:String,
             minLength:2,
             required:true
        },
        houseNumber:{
            type:Number,
            required:true
        },
        zip:{
            type:Number,
            
    },
});

module.exports.AddressSchema = AddressSchema;