import express from 'express';
import userRoute from './routes/userRoute.js';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", () => {
    console.log("Connected");
})

app.use("/api/users", userRoute);

app.listen(3001, ()=>console.log('Server running on port 3001'));