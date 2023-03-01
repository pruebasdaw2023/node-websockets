const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')


noteForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviando...')

    saveNotes(title.value, description.value)

})