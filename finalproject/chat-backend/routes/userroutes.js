const express = require("express");
const router = express.Router();
const User = require('../schemas/userSchema');

router.post('/register', async(req, res) => {
    const user1 = await User.findOne({ userName: req.body.userName });
    if (user1) {
        return res.status(404).send("The user with given username already exists want to login?");
    }
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        onlineStatus: true
    });
    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get('/', async(req, res) => {
    const user1 = await User.find({ },{userName:1, _id: 0});
    res.send(user1);
  });

function validateUser(user,pass) {
    if(user.password===pass){
        return true;
    }
    return false;
}

router.post('/login', async (req, res) => {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
        return res.status(404).send("The user with given id is not found");
    }
    if(validateUser(user,req.body.password)){
        return res.send(user);
    }
    return res.status(404).send("Given id and Password not found");
});

router.put('/logout', async (req, res) => {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
        return res.status(404).send("The user with given id is not found");
    }
    user.onlineStatus=false;
    user.save();
    return res.status(200).send("Logout successfull");
});


module.exports = router;