//convirte kms a m
var respostakm = prompt("Canto queres convertir de kilómetros a metros?");
var respostam = respostakm + " km " + " son " + respostakm * 1000 + " m.";

//convirte dólares a euros
var respostadolar = prompt("Canto queres convertir de dólares a euros?");
var respostaeuro = respostadolar + " $ " + " son " + respostadolar * 0.92 + " €.";


//convirte GB a B
var respostagb = prompt("Canto queres convertir de GB a B?");
var respostab = respostagb + " GB " + " son " + respostagb * 1000000000 + " B.";

//convirte horas a segundos
var respostah = prompt("Canto queres convertir de horas a segundos?");
var respostas = respostah + " h " + " son " + respostah * 3600 + " s.";


alert(
    respostam + "\n" +
    respostaeuro + "\n" +
    respostab + "\n" +
    respostas + "\n" + " " + "\n" + "Desexa convertir algo máis? Prema F5"
);