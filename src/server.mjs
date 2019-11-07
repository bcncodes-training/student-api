//import https from 'https';
import http from 'http';
import app from './app.mjs';
import socketio from 'socket.io';
import chatRouter from './controllers/chat/index.mjs';

const server= http.createServer(app);

const io = socketio(server);

app.use('/chat',chatRouter(io));

server.listen(process.env.PORT);

io.on('connection', socket => console.log(`client: ${socket.id} connected`));
   