

const socketModel = require("../models/soketHander");

module.exports = function(io) {
    io.on("connection", socket => {
        const socketId = socket.id;
        //登录
        socket.on("login", async userId => {
            await socketModel.saveUserSocketId(userId, socketId);
        });
        // 更新soketId 
        socket.on("update", async userId => {
            console.log('更新socketId')
            await socketModel.saveUserSocketId(userId, socketId);
        });
       //私聊
        socket.on("sendPrivateMsg", async data => {
            const arr = await socketModel.getUserSocketId(data.to_user);
            const RowDataPacket = arr[0];
            const socketid = JSON.parse(JSON.stringify(RowDataPacket)).socketid;
            io.to(socketid).emit("getPrivateMsg", data);
        });
       // 群聊
        socket.on("sendGroupMsg", async data => {
            io.sockets.emit("getGroupMsg", data);
        });
      
       //加好友请求
        socket.on("sendRequest", async data => {
            console.log("sendRequest", data);
            const arr = await socketModel.getUserSocketId(data.to_user);
            const RowDataPacket = arr[0];
            const socketid = JSON.parse(JSON.stringify(RowDataPacket)).socketid;
            console.log('给谁的socketid',socketid)
            io.to(socketid).emit("getresponse", data);
        });
      
        socket.on("disconnect", data => {
            console.log("disconnect", data);
        });
    });
}
