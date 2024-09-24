//Variables
const formulario = document.getElementById('formulario');
const listaTwwets = document.getElementById('lista-tweets');

let tweets = [];
const tweet = document.querySelector("#tweet");

// Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet)

    document.addEventListener('DOMContentLoaded', ()=> {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets)
        crearHTML()
    });
}


//funciones
function agregarTweet(e){
    e.preventDefault();
    const t = tweet.value;

    const tweetObj = {
        id: Date.now(),
        texto : t
    }

    tweets = [ ...tweets, tweetObj ];
    console.log(tweets);
    crearHTML()
}


function crearHTML(){

    limpiarHTML()
    if(tweets.length > 0){
        tweets.forEach(tweet => {

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = 'X';
            btnEliminar.onclick = function(){
                borrarTweet(tweet.id)
            }

            const li = document.createElement('li');
            li.innerText = tweet.texto;
            li.appendChild(btnEliminar);
            listaTwwets.appendChild(li);
        })


    }

    sincronizarStorage()

}


function borrarTweet(id){
   // console.log("borrando" , id)
    tweets = tweets.filter(tweet => tweet.id !== id)
    console.log(tweets)
    crearHTML()
}

function sincronizarStorage(){
    localStorage.setItem('tweets' , JSON.stringify(tweets));

}


function limpiarHTML(){
    listaTwwets.innerHTML = '';
}







