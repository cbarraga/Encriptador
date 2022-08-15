let textoIngresado = document.getElementById("input-texto");
let btnEncriptacion    = document.getElementById("btn-encriptar");
let btnDesencriptacion = document.getElementById("btn-desencriptar");
let mensajeEncriptado  = document.getElementById("msg");
let btnCopiar          = document.getElementById("btn-copy");
let texto, textoDesencriptado, textoEncriptado;

function transformar (tipo, texto) {
    let entrada, salida;
    if (tipo === "encriptar") {
        entrada=["e","i","a","o","u"];
        salida=["enter", "imes", "ai", "ober", "ufat"];
    }  else {
        entrada=["enter", "imes", "ai", "ober", "ufat"];
        salida=["e","i","a","o","u"];
    }

    return texto.replaceAll(entrada[0], salida[0])
        .replaceAll(entrada[1], salida[1])
        .replaceAll(entrada[2], salida[2])
        .replaceAll(entrada[3], salida[3])
        .replaceAll(entrada[4], salida[4]);
}

function encriptacion() {
    texto = textoIngresado.value;
    textoEncriptado = transformar ("encriptar", texto);
    mensajeEncriptado.value = textoEncriptado;
    textoIngresado.value = "";
}

function desencriptacion() {
    texto = textoIngresado.value;
    textoDesencriptado = transformar("desencriptar", texto);
    mensajeEncriptado.value=textoDesencriptado;
    textoIngresado.value = "";
}

function copiar() {
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoIngresado.focus();
}
btnEncriptacion.addEventListener("click",encriptacion);
btnDesencriptacion.addEventListener("click",desencriptacion);
btnCopiar.addEventListener("click",copiar);
