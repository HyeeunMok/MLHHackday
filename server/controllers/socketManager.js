var io = require('../config/headers').io
var md5 = require('md5')

var count = 0;
var numRooms = 0;
var curmd5 = "";

var mainObj = {}
mainObj.rooms = []

exports.new_socket_conn = io.on('connection', (socket) => {
    console.log(`${++count} user(s) connected`)
    // io.sockets.in(room).emit
    var board = []
    var numUsersInRooms = 0
    var p1 = ""  //Socket id of first player
    var p2 = ""  //Socket id of second player
    var roomid = ""
    socket.on('createNewRoom', () => {
        curmd5 = md5(++numRooms)
        socket.emit('newRoomLink', curmd5);
        mainObj.rooms.push({"id": curmd5})
        console.log(mainObj)
    })


    socket.on('joinRoom', (roomObj) => {
        roomHash = roomObj.id
        username = roomObj.username
        socket.join(roomHash)
        roomid = roomHash
        
        var clients = io.sockets.adapter.rooms[roomHash].sockets;

        //to get the number of clients
        var numUsersInRooms = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;

        
        if (numUsersInRooms == 1) {
            // p1 = socket.id
            mainObj.rooms.forEach( (room,i) => {
                if (room.id==roomHash){
                    room.p1 = socket.id
                    room.name1 = username
                    console.log(room.p1)
                }
              
            })
        } else if (numUsersInRooms == 2) {
            
            mainObj.rooms.forEach( (room,i) => {
                if (room.id==roomHash){
                    room.p2 = socket.id
                    room.name2 = username
                    socket.to(roomHash).emit('updateName', room.name1)
                }
              
            })
        }
        console.log(mainObj)
        socket.broadcast.to(roomHash).emit('updateName', username)
    })

    socket.on('updateCoord', (obj) => {

        console.log("Socket ID" + socket.id)
        if (socket.id == p1) {
            obj.shape = "X"
        } else {
            obj.shape = "O"
        }
        console.log(obj)
        socket.broadcast.to(roomid).emit('updateClientCoord', obj)
    })

    socket.on('disconnect', () => {
        count--;
        console.log(`${count} user(s) connected`)
    })
})