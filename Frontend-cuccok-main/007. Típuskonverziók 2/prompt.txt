/*
//prompt:
// a bekért adat MINDEN ESETBEN string lesz!
let p = prompt("Adj meg egy számot! ", "Mondjuk legyen 5!");
console.log(p);
// kivéve, ha típust kényszerítünk / kasztolás / konvertálunk!
p = Number(p);
console.log(typeof(p));
let q = 5;
console.log(p+q);
console.log(typeof(p+q));
*/
/*
//while felírása speciálisan:
let i = prompt("Kérlek, add meg i értékét!");
i = Number(i); // típuskényszerítés - konverzió!
while(i) { // < = > while (i!=0)
    console.log(i);
    i--;
}
alert("na ezt itt befejeztem, az i értéke: "+i); // ellenőrzés, magunknak!
// az iterációból kilépve, i értéke 0
i++;
alert("i értéke: "+i);
*/
/*
let i=prompt("Kérem írja be az életkorát!", 18);
let j = (i<3) ? alert("hello baba") : alert("üdvözlöm!");
*/
let j = prompt("Kérem írja be az életkorát! ", 18);
let k = (j<3) ? "bébi" : 
    (j<10) ? "gyerek" : 
    (j<18) ? 'fiatal felnőtt' : "Minden egyéb";

alert(k);
