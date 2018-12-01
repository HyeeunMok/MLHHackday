var io = require('../config/headers').io
var md5 = require('md5')

var count = 0;
var numRooms = 0;
var curmd5 = "";

exports.new_socket_conn = io.on('connection',(socket) => {
    console.log(`${++count} user(s) connected`)
    // io.sockets.in(room).emit
    var board = []
    var numUsersInRooms = 0
    var p1 = ""  //Socket id of first player
    var p2 = ""  //Socket id of second player
    var roomid = ""
    socket.on('createNewRoom', () => {
        curmd5 = md5(++numRooms)
        socket.emit('newRoomLink',curmd5);
        
    })

    socket.on('joinRoom',(roomHash) => {
        socket.join(roomHash)
        console.log(socket.id)
        roomid = roomHash
        ++numUsersInRooms
        if (numUsersInRooms == 1){
            p1 = socket.id
        }else if(numUsersInRooms==2){
            p2 = socket.id
        }
        socket.to(roomHash).emit('connected','hi')
    })

    socket.on('updateCoord',(obj) => {
        if (socket.id==p1){
            obj.shape = "X"
        }else{
            obj.shape = "O"
        }
        console.log(obj)
        socket.to(roomid).emit('updateClientCoord',obj)
    })

    socket.on('disconnect', () => {
        count--;
        console.log(`${count} user(s) connected`)
    })
})