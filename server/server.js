const app = require('./config/headers').app
const server = require('./config/headers').server
const express = require('./config/headers').express
const port = process.env.PORT || 3000;
var path = require('path')
var rooms = [];
/*  json format room
{
  id: 1 ,
  players: [{id: 1, name: "name"}],
  hash: ""
}
*/

var socketManager = require('./controllers/socketManager')
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/testing',express.static(__dirname + '/public/testing'));

server.listen(port,() => {
    console.log(`Server listening on http://localhost:${port}`);
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})
app.get('/testing', (req,res) =>{
    res.sendFile(path.join(__dirname,"../public/testing/index.html"));
})
app.get('/create', (req,res) =>{
    res.sendFile(path.join(__dirname,"../public/testing/create.html"));
})

app.get('/join', (req,res) =>{
    res.sendFile(path.join(__dirname,"../public/testing/join.html"));
})
