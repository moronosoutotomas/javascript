function suma(a, b) {
    return (a + b)
}
function resta(a, b) {
    return (a - b)
}
function multiplicacion(a, b) {
    return (a * b)
}


let operando1 = parseInt(prompt("Indica o primeiro operando que desexas utilizar:"));

let operando2 = parseInt(prompt("Indica o segundo operando que desexas utilizar:"));


document.write("<p>" + "Resultado de la SUMA de tus operandos: " + suma(operando1, operando2) + "</p>");
document.write("<p>" + "Resultado de la RESTA de tus operandos: " + resta(operando1, operando2) + "</p>");
document.write("<p>" + "Resultado de la MULTIPLICACIÓN de tus operandos: " + multiplicacion(operando1, operando2) + "</p>");
