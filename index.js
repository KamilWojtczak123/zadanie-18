const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);
const UsersService = require('./userService');

const usersService = new UsersService();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
        socket.on('join', function(name) {
        userService.addUser({
            id: socket.id,
            name
        });
    
            io.emit('update', {
            user: userService.getAllUser()
        });
    });
    io.on('connection', function(socket) {
        socket.io('disconnect', () => {
            userService.removeUser(ssocket.id);
            socket.$broadcast.emit('update', {
                users: userService.getAllUsers()
            });
        });
    });
    io.on('connection', function(socket) {
        socket.on('message', function(message) {
            const {name} = userService.getUserById(socket.id);
            socket.broadcast.emil('message', {
                text: message.text,
                from: name
            });
        });
    });
    
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});