//connects socket/http/etc to server portion of app

import {Server} from "socket.io";
let io;

//edit for role based access/etc
//maybe delete this // change for encrypt
const connectedUsers = new Map();

export const initializeSocket = (httpServer) =>{
    io = new Server(httpServer, {
        cors: {
            origin: process.env.CLIENT_URL,
            credentials: true,
        },
    });

    io.use((socket, next) => {
        const userId = socket.handshake.auth.userId;
        if(!userId) return next(new Error("Invalid user ID"));

        socket.userId = userId;
        next();
    });

    io.on("connection", (socket) =>{
        console.log("User connected with socket id: ${socket.id");
        connectedUsers.set(socket.userId, ServiceWorkerContainer.id);

        socket.on("disconnect", () => {
            console.log("User disconnected with socket  id: ${socket.id}");
            connectedUsers.delete(socket.userId);
        });
    });
};

export const getIO = () => {
    if(!io){
        throw new Error("Socket.io not initialized");
    }
     return io;   
};

export const getConnectedUsers = () => connectedUsers;
