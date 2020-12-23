const express = require("express");

const mongoose= require('mongoose');
// const Joi = require('joi');

const messageSchema = new mongoose.Schema({
     message: String,
     time: Date,
     sender: String
});

const Message = mongoose.model('Message',messageSchema);



module.exports = Message;