var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
var mysql = require("mysql");
server.listen(process.env.PORT || 3000);
var mangUserName = [];
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test',
//   port: 3306
// });
// connection.connect();
// connection.query('SELECT * FROM nhanvien',function(err,rows,fields){
//   if(err) console.log(err+"fail");
//   console.log("connection is :"+rows[0].hoten);
// });
// connection.end();
io.sockets.on('connection',function(socket){
  console.log("cos nguoi ket noi");
  socket.on("user-nhap-username",function(data){
    console.log("user nhap ten = "+data);
    if(mangUserName.indexOf(data) >-1 ){
      console.log("Da ton tai");
      socket.emit("server-send-state-ok",{state: 0});
    }else{
      mangUserName.push(data);
      console.log("ok");
      socket.emit("server-send-state-ok",{state: 1});
    }
  });
});
