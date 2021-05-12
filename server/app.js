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
        assignedTo:"anios_2",
        room:"kamer 2"
    },
];

var logs = [];
var users = {};

socketio.on("connection", (socket) => {

    var user = {
        id: socket.id,
        role: 'geen rol gekozen',
        coords:{
            x: 0,
            y: 0
        }
    };

    socket.on('join', function(room) {
        socket.join(room);
    });

    users[socket.id] = user;
    socketio.emit('connected_user',{ user:user, users:users, tasks:tasks,}); // Send the dictionnary

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
        socketio.emit('new_user', users); // Send the dictionnary
        console.log(user.role);
    });

    socket.on('send_log', data =>{
        var newLog = { user:data.user, type: data.message.type, message: data.message.message};
        logs.push(newLog);
        socketio.emit('new_log', newLog);
    });

    socket.on('send_new_task', data =>{
        var newTask = {
            type:data.task.type,
            id: tasks.length + 1,
            caseId: data.task.caseId,
            assignedTo: data.assigned_to,
            room: data.task.room,
        };
        tasks.push(newTask);
        socketio.emit('new_task', newTask);
    });

    socket.on('update_tasks', data =>{
        console.log(tasks);
    });

    socket.on('disconnect', function(){
        delete users[socket.id];
        socketio.sockets.emit('update_users', users);
        console.log('disconnected: ' + socket.id);
    });
});

http.listen(3000, () => {
    console.log("Listening at :3000...");
});

