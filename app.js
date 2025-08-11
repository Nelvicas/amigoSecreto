// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let amigos = [];



//Funcion capturar valores 


function agregarAmigo() {
    var nombreAmigo = document.getElementById('amigo').value;

    // Validar si está vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar los nombres 
    amigos.push(nombreAmigo);
    mostraramigo()
    console.log(amigos);

    // Agregar el nuevo amigo a la lista 
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML += `<li>${nombreAmigo}</li>`;  

    // Limpiar la caja
    document.getElementById('amigo').value = "";
}


function mostraramigo(){
   var lista = document.getElementById('listaAmigos');
   lista.innerHTML = "";

   for (var i = 0; i < amigos.length; i++){
    lista.innerHTML +=  `<li>${amigos[i]}</li>`; 
   }

}

function sortearAmigo(){
    if (amigos.length === 0) {
    return;
}

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    //  Obtener el nombre sorteado
    let amigoSorteado = amigos[amigoAleatorio];

    //  Mostrar el resultado en el elemento HTML
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}