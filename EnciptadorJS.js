const botonEncriptar = document.getElementById("btnEncriptar");
const botonDesencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");
var textinput = document.getElementById("txtareaInput"); 
//
//En esta parte del codígo se muestra el texto.
//
function mostrarTexto()
{    
}
//
//Lo que hace esta funcion es mostrar los elementos 
//que esta ocultos en la section areaMostrarTexto.
//
function mostrarElementos(params)
{
    document.getElementById("Resultado").style.display = "block";
    botoncopiar.style.display = "block";  
}
//
//Esta funcion es la encargada de copiar en portapapel 
//lo que se encuentra en el "Resultado".
function copiarTexto()
{
    var elementoACopiar = document.getElementById("Resultado");
    var rango = document.createRange();
    rango.selectNode(elementoACopiar);
    
    window.getSelection().removeAllRanges(); // Limpiar selecciones previas
    window.getSelection().addRange(rango);//agrega un rango

    document.execCommand("copy");

    alert("El texto fue copiado.");
}
//
//Aqui se ejecutan las funciones.
//
botonEncriptar.onclick = mostrarTexto;
botoncopiar.onclick = copiarTexto;
botonDesencriptar.onclick = mostrarTexto;
//
//Esta Función se encarga de hacer el encriptado.
//

