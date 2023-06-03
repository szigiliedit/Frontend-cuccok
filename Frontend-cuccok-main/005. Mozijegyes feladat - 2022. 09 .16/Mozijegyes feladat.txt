var age = prompt("Szia! Hány éves vagy?");


//var age=0;

if (age < 18) {
    console.log("Nem vagy 18 éves, nem nézheted meg a moziban a filmet!");
    alert(age+ " évesek nem nézhetik meg a filmet! Viszlát!");
    
}


/*if (age >= 18) {
    console.log("Megnézheted a filmet.");
}*/

var jegyar1 = 500;
var jegyar2 = 1850;
var jegyszama = 0;
var sorszama = 0;
var ulesszama = 0;
var jegyszama2 = 0;
var sorszama2 = 0;
var ulesszama2 = 0;


if (age <= 25 && age >= 18) {
    console.log("25 évesnél fiatalabb vagy, ezért neked " + jegyar1 + " Ft a jegy. A jegyed száma:");
    console.log(Math.floor(Math.random(jegyszama) * 100));
    console.log("A sorod száma: ");
    console.log(Math.floor(Math.random(sorszama) * 100));
    console.log("Az ülésed száma: ");
    console.log(Math.floor(Math.random(ulesszama) * 100));
}

else {
    console.log("25 év feletti vagy, ezért neked " + jegyar2 + " Ft a jegy. A jegyed száma:");
    console.log(Math.floor(Math.random(jegyszama2) * 100));
    console.log("A sorod száma: ");
    console.log(Math.floor(Math.random(sorszama2) * 100));
    console.log("Az ülésed száma: ");
    console.log(Math.floor(Math.random(ulesszama2) * 100));
}

//var eletkor = prompt("Szia! Hány éves vagy?")

