// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = "";
let lista = []; //array de amigos

function agregarAmigo() {
    // Captura el valor del input
    const input = document.getElementById('amigo');
    // Valida que el campo no esté vacío
    if (input.value.trim() === "") {
        alert('Por favor, inserte un nombre.')
    } else {
        // Guardar el nombre en el array
        lista.push(input.value.trim());
        // Actualizar la lista visual en el HTML
        asignarListaElementos();
        // Limpiar campo
        limpiarCaja();
    }
}

// Limpia el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarListaElementos() {
    // Selecciona el ul del HTML
    let ulLista = document.querySelector('#listaAmigos');
    // Limpia el contenido para no repetir
    ulLista.innerHTML = "";
    // Recorrer el array y se crea un <li> por cada amigo
    for (let amigo of lista) {
        // Se crea el <li>
        let li = document.createElement("li");
        //Asigna nombre
        li.textContent = amigo;
        // Lo mete al <ul>
        ulLista.appendChild(li);
    }
}

function sortearAmigo() {
    // Verificar que haya al menos un elemento
    if (lista.length > 0) {
        // Generar índice aleatorio
        let indice = Math.floor(Math.random()*lista.length);
        // Obtener el nombre sorteado
        let amigoGenerado = lista[indice];
        document.getElementById('resultado').innerHTML = "El amigo secreto es: <b>" + amigoGenerado + "</b>";
    } else {
        alert('Por favor, inserte un nombre.')
    }
}
