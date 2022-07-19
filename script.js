function displaynum(num) {
    calculadora.visor.value = calculadora.visor.value + num
}

function clean() {
    calculadora.visor.value = ''
}

function apagar() {
    calculadora.visor.value = calculadora.visor.value.substring(0, visor.value.length -1)
}