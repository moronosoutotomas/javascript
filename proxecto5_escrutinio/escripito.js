var votos1 = 0;
var votos2 = 0;
var votos3 = 0;
var votoBranco = 0;
var votosTotais = -1;

/*
// pregunta ao botante
var resposta = prompt("A que partido desexa votar");

// bota contas
if (resposta == '1') {
    votos1 = votos1 + 1;
}
if (resposta == '2') {
    votos2 = votos2 + 1;
}
if (resposta == '3') {
    votos3 = votos3 + 1;
}

// mostra os resultados
document.write(
    "<p>Votos de 1: " + votos1 + "</p>"
);
document.write(
    "<p>Votos de 2: " + votos2 + "</p>"
);
document.write(
    "<p>Votos de 3: " + votos3 + "</p>"
);
*/

// pregunta a tres botantes

/* for (var i = 1; i <= 3; i++) { */
while (resposta != "fin") {


    var resposta = prompt("A que partido desexa votar?");

    // bota contas
    if (resposta == '1') {
        votos1 = votos1 + 1;
    }
    if (resposta == '2') {
        votos2 = votos2 + 1;
    }
    if (resposta == '3') {
        votos3 = votos3 + 1;
    }
    if (resposta == '') {
        votoBranco = votoBranco + 1;
    }
};
votosTotais = votos1 + votos2 + votos3 + votoBranco;


// mostra os resultados
document.write(
    "<p>Porcentaxe de votos para 1: " + ((votos1 / votosTotais) * 100).toFixed(2) + "%" + "</p>"
);
document.write(
    "<p>Porcentaxe de votos para 2: " + ((votos2 / votosTotais) * 100).toFixed(2) + "%" + "</p>"
);
document.write(
    "<p>Porcentaxe de votos para 3: " + ((votos3 / votosTotais) * 100).toFixed(2) + "%" + "</p>"
);
document.write(
    "<p>Porcentaxe de votos en branco: " + ((votoBranco / votosTotais) * 100).toFixed(2) + "%" + "</p>"
);
document.write(
    "<p>Votos totais: " + votosTotais + "</p>"
);