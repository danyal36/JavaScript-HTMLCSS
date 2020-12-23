const express = require("express");
const router = express.Router();
const Message = require("../schemas/messageSchema")
// const Joi = require('joi');

var messages=[];

async function getMessage(){
    const message = await Message.find({});
    messages=message;
}

router.get('/', async(req, res) => {
    const message = await Message.find({ },{_id: 0});
    res.send(message);
});


module.exports = router;