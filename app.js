let numeroSecreto            = 0;
let numeroIntentos           = 0;
let numeroIntentosPermitidos = 3;
let listaNumerosSorteados    = [];
let numeroMaximo             = 10;

// asignar texto, automatizado
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}


// Genera un número aleatorio (automatizado)
function generarNumeroSecreto(){
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

     // Si ya sorteamos todos los números hacemos una salida
     if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('.texto__parrafo', 'Ya se sortearon todos los números posibles');
        // La salida se ejecuta al ya no llamar a la función otra vez
     } else{
        
        // Si el numero generado está incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

         }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
     }

     
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.querySelector(".container__input").value);

    //console.log("Numero intentos", numeroIntentos);
    if(numeroUsuario === numeroSecreto) {
        asignarTextoElemento(".texto__parrafo", `Acertaste en ${numeroIntentos} ${numeroIntentos===1? "intento":"intentos"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
             
    } else{
         if(numeroSecreto>numeroUsuario){
             asignarTextoElemento(".texto__parrafo", "El número secreto es mayor");
         }
        else{
             asignarTextoElemento(".texto__parrafo", "El número secreto es menor");
         }
         numeroIntentos++;
         limpiarCaja();
     }

    
 }

 function limpiarCaja(){
    document.querySelector(".container__input").value = "";
 }

 function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento(".texto__parrafo", `Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
 }

 function reiniciarJuego(){
    // limpiar caja
        limpiarCaja()

    // Indicar mensaje de inicio intervalo de numeros
    // Generar el número aleatorio 
    // Inicializar el número de intentos
        condicionesIniciales();

    // Deshabilitar el botón de nuevo juego
        document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
 }

 condicionesIniciales();


