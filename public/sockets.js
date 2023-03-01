const socket = io()

const saveNotes = (title, description) => {
  socket.emit("client:newnote", {
    title: title,
    description: description,
  });
};

socket.on('server:newnote', appendNote);

socket.on('server:loadnotes', notes => {
    console.log(notes)
})
