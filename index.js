const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
<<<<<<< HEAD
const io = socketIo(server);
const UsersService = require('./UsersService');

const userService = new UsersService(); 
=======
const io = socket(server);
const UsersService = require('./userService');

const usersService = new UsersService();
>>>>>>> d83955830540d270cf604b07eca06d4d165fa7b6

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('message', function(message) {
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            from: name
        });
    });
    socket.on('join', function(name) {
        userService.addUser({
            id: socket.id,
            name
        });
        io.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('disconnect', () => {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: userService.getAllUsers()
        });
    });
});

server.listen(8080, function() {
    console.log('listening on *:8080');
});