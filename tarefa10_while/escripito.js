var conto = "Quieres que te cuente el cuento de la buena pipa?"
var resposta;
resposta = true;
while (resposta == true) {
    document.write(conto);
    resposta = confirm(conto);
};