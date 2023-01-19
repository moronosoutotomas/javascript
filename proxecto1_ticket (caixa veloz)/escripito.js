let pri = parseInt(prompt("Precio do primer producto: "));
let seg = parseInt(prompt("Precio do segundo producto: "));
let ter = parseInt(prompt("Precio do tercero producto: "));

let pagar = (pri + seg + ter);

document.write("<h4>" + "Primer producto: " + pri + "€" + "</h4>");
document.write("<h4>" + "Segundo producto " + seg + "€" + "</h4>");
document.write("<h4>" + "Tercer producto " + ter + "€" + "</h4>");
document.write("<h3>" + "TOTAL: " + pagar + "€" + "</h3>");


/*document.write(<h3>"TOTAL: " + pagar</h3>); */

