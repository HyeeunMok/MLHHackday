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

    var roomObject = ""     

    socket.on('createNewRoom', () => {
        curmd5 = md5(++numRooms)
        socket.emit('newRoomLink', curmd5);
        mainObj.rooms.push({"id": curmd5,board:[0,0,0,0,0,0,0,0,0]})
        // console.log(mainObj)
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
                    roomObject = room
                    room.p1 = socket.id
                    room.name1 = username
                    // console.log(room.p1)
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
        // console.log(mainObj)
        socket.broadcast.to(roomHash).emit('updateName', username)
    })

    socket.on('updateCoord', (obj) => {
        mainObj.rooms.forEach( ( room,i) => {
            if (room.id==roomHash){
                roomObject = room
            }
        })
        // console.log(roomObject.board)
        // console.log(obj.i)
        // if (roomObject.p1 == socket.id){
        //     // console.log(roomObject)
        //     roomObject.board[obj.i] = 1
        // }else{
        //     // console.log(roomObject.board)
        //     // console.log(obj.i)
        //     roomObject.board[obj.i] = 2
        // }
        socket.broadcast.to(roomid).emit('updateClientCoord', obj)
        // var result = checkWin(roomObject)
        // if (result.status=="null"){

        // }else if(result.status=="win"){
        //     socket.to(roomid).emit('result',`${result.winner} is the winner`)
        // }else if(result.status=="tie"){
        //     socket.to(roomid).emit('result',"It's a tie!")
        // }
    })

    socket.on('disconnect', () => {
        count--;
        console.log(`${count} user(s) connected`)
    })
})

// function checkWin(room){
//     let output = {status: "null"};
//     let board = room.board;
//     // horizontal matches
//     if(board[0] != 0 && board[0] === board[1] && board[1] === board[2]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }else if(board[3] != 0 && board[3] === board[4] && board[4] === board[5]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }else if(board[6] != 0 && board[6] === board[7] && board[7] === board[8]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }
//     //vertical matches
//     else if(board[0] != 0 && board[0] === board[3] && board[3] === board[6]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }else if(board[1] != 0 && board[1] === board[4] && board[4] === board[7]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }else if(board[2] != 0 && board[2] === board[5] && board[5] === board[8]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }
//     //diagonal matches
//     else if(board[0] != 0 && board[0] === board[4] && board[4] === board[8]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }else if(board[2] != 0 && board[2] === board[4] && board[4] === board[6]){
//       if(board[0] == 1){
//         output.winner = room.name1;
//       }else{
//         output.winner = room.name2;
//       }
//       output.status = "win";
//     }
  
//     //tie
//     else if(board[0] != 0 && board[1] != 0 && board[2] != 0 && board[3] != 0 && board[4] != 0 && board[5] != 0 && board[6] != 0 && board[7] != 0 && board[8] != 0){
//       output.status = "tie"
//     }
//     return output;
//   }
  