
// xera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 100
misterio = misterio * 100;

//redondeo para non ter decimais
misterio = Math.round(misterio);

var escolle = prompt('Cal é o número misterioso menor ca 100?');

while (escolle != misterio) {
    var escolle = prompt('Cal é o número misterioso menor ca 100?');
    if (escolle > misterio) {
        alert("O número que inventei é menor do que dixeches");
    }
    else {
        alert("O número que inventei é maior do que dixeches");
    }
};

document.write(misterio);
