function addDisplay(num) {
    let display = document.getElementById("display")
    display.innerHTML += num
}


function limpar() {
    document.getElementById("display").innerHTML = ""
}


function calcular() {
    var resultado = document.getElementById("display").innerHTML;

    if (resultado) {
        document.getElementById("display").innerHTML = eval(resultado)
    }
}


