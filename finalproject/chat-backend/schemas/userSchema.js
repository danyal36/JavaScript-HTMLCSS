const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    onlineStatus: Boolean
});


userSchema.getUsers = () => {
    return User.find({});
}

const User = mongoose.model('User',userSchema);

module.exports =  User;