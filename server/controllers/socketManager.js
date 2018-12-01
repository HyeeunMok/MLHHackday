var io = require('../config/headers').io

var count = 0;
exports.new_socket_conn = io.on('connection',(socket) => {
    console.log(`${++count} user(s) connected`)
    
    socket.on('disconnect', () => {
        count--;
        console.log(`${count} user(s) connected`)
    })
})