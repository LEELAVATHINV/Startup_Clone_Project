const mongoose = require('mongoose');
const fromDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type: String,
        required:true,
    },
    companyname:{
        type: String,
        required:true,
    }
});
const FormData = mongoose.model('FormData', fromDataSchema);
module.exports = FormData;