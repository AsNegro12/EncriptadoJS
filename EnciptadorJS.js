//
//En esta parte del codígo se hace la captura y se muestra el texto.
//
const encriptar = document.getElementById("btnEncriptar");
const desencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");

function MostrarTexto()
{
    var textinput = document.getElementById("txtareaInput"); 
    
    var Captura = document.getElementById("Resultado").innerHTML = textinput.value;

}

encriptar.onclick = MostrarTexto;

desencriptar.onclick = MostrarTexto;