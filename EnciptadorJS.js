const botonEncriptar = document.getElementById("btnEncriptar");
const botonDesencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");
var textinput = document.getElementById("txtareaInput");
var textoutput = document.getElementById("outputTexto");
//
//En esta parte del codígo se muestra el texto.
//
function mostrarTexto(boton)
{
    if(boton == 1)
    {
        if(textinput.value == "")
        {
            alert("Agregar texto antes de hacer cualquier cosa.");
        }
        else
        {
            mostrarElementos();
            let texto = textinput.value;
            let txtEncriptado = encriptarTexto(texto);
            textoutput.innerHTML = txtEncriptado;
        }
    }
    else if(boton == 2)
    {
        if(textinput.value == "")
        {
            alert("Agregar texto antes de hacer cualquier cosa.");
        }
        else
        {
            mostrarElementos();
            let texto = textinput.value;
            let textoDesencriptado = desencriptarTexto(texto);
            textoutput.innerHTML = textoDesencriptado;
        }
    }
}
//
//Lo que hace esta funcion es mostrar los elementos 
//que esta ocultos en la section areaMostrarTexto.
//
function mostrarElementos()
{
    document.getElementById("elmentosOcultos").style.display = "block";
    botoncopiar.style.display = "block";  
}
//
//Esta funcion es la encargada de copiar en portapapel 
//lo que se encuentra en el "Resultado".
function copiarTexto()
{
    var elementoACopiar = document.getElementById("outputTexto");
    
    outputTexto.select();
    outputTexto.setSelectionRange(0, 99999);

    document.execCommand('copy');

    //alert("El texto fue copiado.");
}
//
//Aqui se ejecutan las funciones.
//
botoncopiar.onclick = copiarTexto;
//
//Esta Función se encarga de hacer el encriptado.
//
function encriptarTexto(cadena)
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
//
//Esta Función se encarga de hacer el desencriptado.
//
function desencriptarTexto(cadena)
{
    let textoDesencriptado = cadena;

    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

    return textoDesencriptado;
    // QUE NO SE TE OLVIDE, SI DESEAS MODIFICAR ALGO QUE LA FUNCIÓN RECIBE DE OTRO LUGAR 
    //NECESITAS DEVOLVER EL VALOR AL FINAL DE LA FUNCIÓN.
    //console.log("texto desencriptado: " + textoDesencriptado);

}