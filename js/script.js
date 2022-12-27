let textInput =document.querySelector("#textInput")
let buttonEncriptar = document.querySelector("#buttonE")
let buttonDesencriptar = document.querySelector("#buttonD")
let buttonCopiar = document.querySelector("#buttonC")
let output =document.querySelector(".output")
let noData= document.querySelector(".noData")
let imgNoData= document.querySelector(".imgNoData")
let valorActual = null;

let encriptar=()=>{
    let encriptado= ((textInput.value ? textInput.value : valorActual).replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"))
    output.innerHTML=`<h3 class="mensaje">${encriptado}</h3>`
    buttonCopiar.style.display="block"
    output.style.display="relative"
    noData.style.display="none"
    imgNoData.style.display="none"
    valorActual = encriptado;
    textInput.value=""
}
let desencriptar=()=>{
    let desencriptado = ((textInput.value ? textInput.value : valorActual).replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"))
    valorActual = desencriptado;
    output.innerHTML=`<h3 class="mensaje">${desencriptado}</h3>
                <button id="buttonC">Copiar</button>
                     `
    output.style.display="relative"
    noData.style.display="none"
    imgNoData.style.display="none"
    textInput.value=""
}
let copiar=()=>{
    let copia=document.querySelector(".mensaje").innerHTML
    navigator.clipboard.writeText(copia)
}
buttonEncriptar.addEventListener("click",encriptar)
buttonDesencriptar.addEventListener("click", desencriptar)
buttonCopiar.addEventListener("click", copiar)


