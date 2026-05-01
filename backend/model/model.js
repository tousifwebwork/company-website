const {Schema,model} = require('mongoose');

const modelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    resume: {
        type: String,    
        required: true
    },
    role: {
        type: String,
        required: true
 }
});

module.exports = model("Application-details", modelSchema);