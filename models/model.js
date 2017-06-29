var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userid : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

var User = mongoose.model('user',UserSchema);

module.exports = User;