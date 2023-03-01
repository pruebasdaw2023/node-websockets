const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { v4: uuidv4 } = require('uuid')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const notes = []

const app = express();

//CONFIGURACION SOCKET.IO
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Nueva conexion:', socket.id)

    // socket.emit('ping')

    // socket.on('pong', () => {
    //     console.log('Pong!!!')
    // })

    socket.on('client:newnote', newNote => {

        const note = {id: uuidv4(), ...newNote}
        notes.push(note)
        
        socket.emit('server:newnote', note)
       
    })

})

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = { app: app, server: server };
