function medallista(a) {
    if (a == 1) {
        document.write("Medalla de ouro, eres o #1 !!!");
    } else if (a == 2) {
        document.write("Medalla de prata, eres o #2 !!");
    } else if (a == 3) {
        document.write("Medalla de bronce, eres o #3 !");
    } else {
        document.write("Sentímo-lo moito, téntao de novo a próxima vez :$")
    }
};


let posicion = prompt("En que posición chegaches crack?")
medallista(posicion)