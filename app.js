// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombreAmigo);
    visualizarNombres();
    document.getElementById('amigo').value = '';
}

function visualizarNombres() {
    let listaHTML = "<ul>"; 
    amigos.forEach((nombre) => {
        listaHTML += `<li>${nombre}</li>`; 
    });
    listaHTML += "</ul>"; 
    asignarTextoElemento("#listaAmigos", listaHTML);
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Por favor, ingrese al menos un amigo.');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigos);
    console.log(amigoSorteado);
    asignarTextoElemento("#resultado", `El amigo seleccionado es: ¡${amigoSorteado}!`);
}
