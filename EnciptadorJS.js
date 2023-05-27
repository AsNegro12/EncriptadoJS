//
//En esta parte del codígo se hace la captura y se muestra el texto.
//
const encriptar = document.getElementById("btnEncriptar");
const desencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");
var textinput = document.getElementById("txtareaInput"); 

function MostrarTexto()
{   
    if(textinput.value == "")
    {
        alert("Agregue texto antes de hacer cualquier cosa.")
    }
    else
    {
        mostrarElementos();
        document.getElementById("Resultado").innerHTML = textinput.value;
    }
    
}

function mostrarElementos(params)
{
    document.getElementById("Resultado").style.display = "block";
    botoncopiar.style.display = "block";  
}

function copiarTexto()
{
    var elementoACopiar = document.getElementById("Resultado");
    var rango = document.createRange();
    rango.selectNode(elementoACopiar);
    
    window.getSelection().removeAllRanges(); // Limpiar selecciones previas
    window.getSelection().addRange(rango);

    document.execCommand("copy");

    alert("El texto fue copiado.");
}

encriptar.onclick = MostrarTexto;
botoncopiar.onclick = copiarTexto;
desencriptar.onclick = MostrarTexto;