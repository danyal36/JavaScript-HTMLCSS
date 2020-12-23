const express = require("express");
const app = express();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const dbUrl = require('./config/dbConfig');
const authRoute = require("./routes/userroutes");
const messageRoute = require("./routes/messageroutes");
const bodyParser = require("body-parser");
const cors= require("cors");
const io = require('socket.io')(http);
const Message = require('./schemas/messageSchema');
mongoose.connect(dbUrl.Url,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/auth',authRoute);
app.use('/message',messageRoute);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('previous-messages', msg, date,name);
    socket.on('message', (msg, date,name) => {
        socket.broadcast.emit('message-broadcast', msg, date,name);
        let chatMessage = new Message({ message: msg, time: date , sender : name});
        chatMessage.save();
    });
});
var port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log(`Server is running on ${port}`);
});