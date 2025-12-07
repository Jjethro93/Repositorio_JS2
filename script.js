


function sendmessage(event){
    event.preventDefault()
    const name= document.getElementById('name').value
const message= document.getElementById('message').value

const telefone = '5511975492704'

const text = `Olá! Me chamo ${name}, ${message}`
const msgFormated = encodeURIComponent(text)

const url = `https://whatsa.me/${telefone}/?t=${msgFormated}`

window.open(url, '_blank')

}