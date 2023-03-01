console.log('Hola desde la consola del navegador')

//io('http://localhost:3000')


// socket.on('ping', () => {
//     console.log('Escuchando el ping')

//     socket.emit('pong')
// })

const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')



noteForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviando...')

    // console.log(
    //     title.value,
    //     description.value
    // )

    saveNotes(title.value, description.value)



})