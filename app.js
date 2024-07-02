let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

// dentro de la función generaNumeroSecreto hago uso de la recursividad que evita la repetición del mismo número en el sorteo
function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else {
    
    //Si el número generado está en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)){
        return generaNumeroSecreto();
        } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }  
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}


function reiniciarJuego(){
     // limpiar caja
     limpiarCaja();
     //Indicar número de intervalo
     //Generar número aleatorio
     //indicar número de intentos
     condicionesIniciales();
     //deshabilitar botón juego nuevo
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();
