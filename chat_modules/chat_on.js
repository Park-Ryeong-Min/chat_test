/**
 * Created by Myown on 2017-07-23.
 */

var http = require('http');
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('disconnect');
    });
    socket.emit('join',{data:"Welcome"});
});

module.exports = io;