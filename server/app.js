const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http,{
    cors:{
        origin:"*",
    }
});
const cors = require("cors");

express.use(cors());

var position = {
    x: 200,
    y: 200
};

var tasks = [
    {
        type: "case",
        id: 1,
        caseId: 1,
        assignedTo:"anios_1",
        room:"kamer 1"
    },
    {
        type: "case",
        id: 2,
        caseId: 2,
        assignedTo:"anios_1",
        room:"kamer 4"
    }
];

var users = {};

socketio.on("connection", (socket) => {

    var user = {
        id: socket.id,
        role: 'test',
        coords:{
            x: 0,
            y: 0
        }
    };

    socket.on('join', function(room) {
        socket.join(room);
    });

    users[socket.id] = user;
    socketio.emit('new_user', users); // Send the dictionnary
    socketio.emit('connected_user',{ user:user, tasks:tasks}); // Send the dictionnary

    // socket.emit("position", position);
    // socket.on("move", data => {
    //     switch(data) {
    //         case "left":
    //             position.x -= 5;
    //             socketio.emit("position", position);
    //             break;
    //         case "right":
    //             position.x += 5;
    //             socketio.emit("position", position);
    //             break;
    //         case "up":
    //             position.y -= 5;
    //             socketio.emit("position", position);
    //             break;
    //         case "down":
    //             position.y += 5;
    //             socketio.emit("position", position);
    //             break;
    //     }
    // });

    socket.on('mouse_activity', data =>{
        user.coords.x = data.x;
        user.coords.y = data.y;
        socket.to('Game').broadcast.emit('all_mouse_activity', {session_id: socket.id, coords: data, users});
    });

    socket.on('role_selected', data =>{
        user.role = data;
        console.log(user.role);
    });

    socket.on('update_tasks', data =>{
        console.log(tasks);
    });

    socket.on('disconnect', function(){
        delete users[socket.id];
        console.log('disconnected: ' + socket.id);
    });
});

http.listen(3000, () => {
    console.log("Listening at :3000...");
});

