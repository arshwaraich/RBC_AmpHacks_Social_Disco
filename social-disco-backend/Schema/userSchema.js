const { stringLiteral } = require('@babel/types');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: { type: String, unique: true },
    password: String,
    name: String,
    email: String,
    age: Number,
    sex: String,
    location: {
        lat: String,
        long: String
    },
    interestIds: [String],
    usage: [{
        from: Date,
        to: Date
    }],
    videoLink: String,
    contacts: [String],
    groupsId: [String],
    likedUsersId: [String],
    dislikedUsersId: [String],
    claims: [String]
});

user = mongoose.model('users',userSchema);
