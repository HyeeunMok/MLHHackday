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

var bodyParser = require('body-parser')
var socketManager = require('./controllers/socketManager')

app.use('/', express.static(path.join(__dirname,'..', 'public')))

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "testing","home.html"))
})
