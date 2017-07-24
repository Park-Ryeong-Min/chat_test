/**
 * Created by Myown on 2017-07-23.
 */

var http = require('http');
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit('join',{data:"Welcome"});
    socket.on('disconnect', function () {
        console.log('disconnect');
    });
    socket.on('join_room', function (data) {
       socket.join(data.room_id);
       console.log(data.room_id);
       var msg = data.room_id + " has joined";
       socket.emit('notice_join_room', {data:msg});
    });
    socket.on('send_message', function (data) {
        console.log(io.sockets.adapter.rooms);
        io.sockets.in(data.room_id).emit("send_message",{room_id : data.room_id, message : data.message});
    });
});

module.exports = io;