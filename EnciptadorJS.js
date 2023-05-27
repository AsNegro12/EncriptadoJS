//
//En esta parte del codígo se hace la captura y se muestra el texto.
//
const encriptar = document.getElementById("btnEncriptar");
const desencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");

function MostrarTexto()
{
    var textinput = document.getElementById("txtareaInput"); 
    
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

encriptar.onclick = MostrarTexto;

desencriptar.onclick = MostrarTexto;