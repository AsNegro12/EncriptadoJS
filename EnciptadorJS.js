const encriptar = document.getElementById("btnEncriptar");

function ObtenerValorCampo()
{
    var textinput = document.getElementById("txtareaInput");
    var textocapturado = textinput.value;
    
    console.log("la cosola dice:  " + textocapturado);

}

encriptar.onclick = ObtenerValorCampo;