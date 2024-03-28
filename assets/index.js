
function myFunction(event) { 
    var x = event.target;
    let personagem = x.className;

    console.log(x.className)
    document.getElementById("pega_nome").style.position = "absolute";
    document.getElementById("pega_nome").style.bottom = "0px";
    document.cookie = "." + x.className;
}



document.addEventListener("click", myFunction);