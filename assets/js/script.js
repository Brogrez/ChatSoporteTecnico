// Desarrollo : 
/**
 * 1) Inicio la vista y ... debiese cargar el primer chat (o el que sea, pero debiese cargar un chat al menos)
 * Requisitos: -Tener n chats la maqueteados en duro
 *              - Relacionar de alguna forma x chat con x btn de contacto.
 * Idea: Onload ->>> primer chat
 *  
 * 2) Cambio de chat segun el chat clikeado (redundante) 
 * 
 * 3) El ultimo mensaje de cada chat debe estan en "negrita", cuando lo clikeo debe 
 * aclararse el texto 
 * 
 * 4) Cuando escribo en un chat, debiese poder enviar ese mensaje al chat correspondiente.
 *  Pasos a seguir: - Primero tengo que tomar el valor del input segun 
 *                    el evento aplicado, osea.... si apreto la tecla 
 *                    "ENTER" o... clikeo el btn "Enviar mensaje"
 *                  - Segun el chat donde escribi, paso el mensaje.
 *  
 * 5) Respuesta de el chat (mensaje random)
 * */ 

/** Variables */
const chat_1 = document.getElementById('chat1')
const chat_2 = document.getElementById('chat2')
const chat_3 = document.getElementById('chat3')

const ultimoMensaje_1 = document.getElementById('textoChat1')
const ultimoMensaje_2 = document.getElementById('textoChat2')
const ultimoMensaje_3 = document.getElementById('textoChat3')

const chatActivo_1 = document.getElementById('bloque-chat-1')
const inputChat_1 = document.getElementById('input-chat-1')
const btnChat_1 = document.getElementById('boton-chat-1')

const chatActivo_2 = document.getElementById('bloque-chat-2')
const inputChat_2 = document.getElementById('input-chat-2')
const btnChat_2 = document.getElementById('boton-chat-2')

const chatActivo_3 = document.getElementById('bloque-chat-3')
const inputChat_3 = document.getElementById('input-chat-3')
const btnChat_3 = document.getElementById('boton-chat-3')

const listaChats = document.getElementById('lista-chats')
const btnRetroceso1 = document.getElementById('btnRetroceso-Chat1')
const btnRetroceso2 = document.getElementById('btnRetroceso-Chat2')
const btnRetroceso3 = document.getElementById('btnRetroceso-Chat3')

const mensajesRandoms = ['Holaa', 'Bien y tu?', 'XD', ':v', 'sjkdhajks', 'Puede ser', 'Estoy estudiando', 'mesa prime con boltor?']

/** Eventos */
document.addEventListener('DOMContentLoaded', () => {
    primeraCarga()
})
inputChat_1.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        enviarMensaje(1)
    }
})
inputChat_2.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        enviarMensaje(2)
    }
})
inputChat_3.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        enviarMensaje(3)
    }
})

/** Funciones */
function primeraCarga () {
    mostrarChat(1)
}

function mostrarChat(chat) {
    console.log(chat) // Number

    chat_1.classList.add('d-none') 
    chat_2.classList.add('d-none') 
    chat_3.classList.add('d-none') 

    switch (chat) {
        case 1:
            chat_1.classList.remove('d-none') 
            ultimoMensaje_1.classList.remove('fw-bold')
            break
        case 2:
            chat_2.classList.remove('d-none') 
            ultimoMensaje_2.classList.remove('fw-bold')
            break
        case 3:
            chat_3.classList.remove('d-none')
            ultimoMensaje_3.classList.remove('fw-bold') 
            break
    }
    // APUNTE CLAVE DEL GATO: para agregar class o quitarlas... 
    /**
     * classList -->> add( la case que voy a agregar ) 
     * classList -->> remove( la case que voy a quitar ) 
     */
    // segun el chat recibido... mostramos lo que corresponde
    // chat.classList.add('mostrar-chat')
}

function enviarMensaje(chat){
    switch (chat) {
        case 1:
            chatActivo_1.appendChild(crearElemento(inputChat_1.value))
            break
        case 2:
            chatActivo_2.appendChild(crearElemento(inputChat_2.value))
            break
        case 3:
            chatActivo_3.appendChild(crearElemento(inputChat_3.value))
            break
    }
}

function crearElemento (mensaje) {
    // construimos el div 
    const node = document.createElement('div')
    node.classList.add('message-container', 'sender')
    node.textContent = mensaje
    return node
}

function ocultarListaYMostrarChat(chat){
    console.log('estoy dentro de la funcion')
    switch(chat){
        case 1:
            listaChats.classList.add('displayNone')
            chat_1.classList.remove('displayNone')
            mostrarChat(1)
            break
        case 2:
            listaChats.classList.add('displayNone')
            chat_2.classList.remove('d-none')
            mostrarChat(2)
            break
        case 3:
            listaChats.classList.add('displayNone')
            chat_3.classList.remove('d-none')
            mostrarChat(3)
            break
    }
}


function retroceso(){
    listaChats.classList.remove('displayNone')
    chat_1.classList.add('displayNone')
    chat_2.classList.add('d-none')
    chat_3.classList.add('d-none')
}

btnRetroceso1.addEventListener('click',retroceso)
btnRetroceso2.addEventListener('click',retroceso)
btnRetroceso3.addEventListener('click',retroceso)


