const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    phoneNumber: String,
    address: String,
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;