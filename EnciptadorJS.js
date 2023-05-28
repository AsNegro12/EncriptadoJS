const botonEncriptar = document.getElementById("btnEncriptar");
const botonDesencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");
var textinput = document.getElementById("txtareaInput");
var textoutput = document.getElementById("txtResultado");
//
//En esta parte del codígo se muestra el texto.
//
function mostrarTexto()
{

    if(textinput.value == "")
    {
        alert("Agregar texto antes de hacer cualquier cosa.");
    }
    else
    {
        mostrarElementos();
        let texto = textinput.value;
        let txtEncriptado = Encriptar(texto);
        textoutput.innerHTML = txtEncriptado;
    }

}
//
//Lo que hace esta funcion es mostrar los elementos 
//que esta ocultos en la section areaMostrarTexto.
//
function mostrarElementos()
{
    document.getElementById("txtResultado").style.display = "block";
    botoncopiar.style.display = "block";  
}
//
//Esta funcion es la encargada de copiar en portapapel 
//lo que se encuentra en el "Resultado".
function copiarTexto()
{
    var elementoACopiar = document.getElementById("txtResultado");
    var rango = document.createRange();
    rango.selectNode(elementoACopiar);
    
    window.getSelection().removeAllRanges(); // Limpiar selecciones previas
    window.getSelection().addRange(rango);//agrega un rango

    document.execCommand("copy");

    //alert("El texto fue copiado.");
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
function Encriptar(cadena)
{
    var letrasModificadas = {};

    cadena = cadena.split('').map(function(letra)
    {
        if (!['a', 'e', 'i', 'o', 'u'].includes(letra))
        {
        return letra;
        }

        if (letrasModificadas.hasOwnProperty(letra))
        {
        return letrasModificadas[letra];
        }

        var reemplazo = '';
        switch (letra)
        {
        case 'a':
            reemplazo = 'ai';
            break;
        case 'e':
            reemplazo = 'enter';
            break;
        case 'i':
            reemplazo = 'imes';
            break;
        case 'o':
            reemplazo = 'ober';
            break;
        case 'u':
            reemplazo = 'ufat';
            break;
        }

        letrasModificadas[letra] = reemplazo;
        return reemplazo;
    }).join('');

    return cadena; 
}
