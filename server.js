const express = require('express')
const socket = require("socket.io")
const app = express()

 
 var server = app.listen(3000,(()=>{
    console.log("Port Listening on 3000");
 }))

 app.use(express.static("public"))
 var upgradedServer = socket(server)
 upgradedServer.on("connection",((socket)=>{
    console.log("Socket connected", socket.id);
 }))
