var io = require('../config/headers').io
var md5 = require('md5')

var count = 0;
var numRooms = 0;
var curmd5 = "";

exports.new_socket_conn = io.on('connection',(socket) => {
    console.log(`${++count} user(s) connected`)
    // io.sockets.in(room).emit

    socket.on('createNewRoom', () => {
        curmd5 = md5(++numRooms)
        socket.emit('newRoomLink',curmd5);
    })

    socket.on('joinRoom',(roomHash) => {
        socket.join(roomHash)
        socket.to(roomHash).emit('connected','hi')
    })

    socket.on('disconnect', () => {
        count--;
        console.log(`${count} user(s) connected`)
    })
})