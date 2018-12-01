const app = require('./config/headers').app
const server = require('./config/headers').server
const express = require('./config/headers').express
const port = process.env.PORT || 3000;
var path = require('path')

app.use('/',express.static(path.join(__dirname,'public')))

server.listen(port,() => {
    console.log(`Server listening on http://localhost:${port}`);
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})