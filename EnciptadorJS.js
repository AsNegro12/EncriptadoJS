const encriptar = document.getElementById("btnEncriptar");
const desencriptar = document.getElementById("btnDesencriptar");
const botoncopiar = document.getElementById("btnCopiar");

function ObtenerValorCampo()
{
    var textinput = document.getElementById("txtareaInput");
    var textocapturado = textinput.value;
    
    console.log("la cosola dice:  " + textocapturado);

}

encriptar.onclick = ObtenerValorCampo;