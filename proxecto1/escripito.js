var pri = parseInt(prompt("Precio do primer producto: "));
var seg = parseInt(prompt("Precio do segundo producto: "));
var ter = parseInt(prompt("Precio do tercero producto: "));

var pagar = (pri + seg + ter);

alert(
    "Primer producto: " + pri + "€" + "\n" + 
    "Segundo producto: " + seg + "€" + "\n" + 
    "Tercer producto: " + ter + "€" + "\n" + 

    "TOTAL: " + pagar
);