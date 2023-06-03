"use strict";
/*const szamok = [];
for(let i=0;i<10;i++){
    //szamok[i]=i;     
    szamok.push(i+1);
}
console.log(szamok);
//Tömbök számossága:
console.log("A tömb számossága: "+szamok.length);
console.log("A tömb 0.ik eleme: "+szamok[0]);
*/
/*
const a=[];
const b=[];
const c=[];
let j,k=0; 
for(let i=0;i<100;i++){ // 1-től 100-ig feltöltjük elemekkel!
    a.push(i+1);     
    if(a[i]%2 == 0) { // ha páros, akkor írja a b tömbbe az a aktuális értékét
        b.push(a[i]);
    }
    if(a[i]%3 == 0){ // ha oszth.3-al akkor c-be írja...
        c.push(a[i]);
    }
    if((a[i]%3 ==0)||(a[i]%5==0)){
        document.write("a elem osztható 5-el vagy 3-al, vagy mind2-vel: "+a[i]+"<br>");
    }
}
console.log(a);
console.log(b);
console.log(c);
console.log(a.length);
console.log(b.length);
console.log(c.length);
*/

const a=[];
for(let i=0;i<100;i++){
    let x = Math.floor(Math.random()*100)+1;
    while(a.includes(x)){
        x = Math.floor(Math.random()*100)+1;
    }
    a.push(x);
}
for(let i=1;i<100;i++){
document.write(a[i]+" ");
if ((i%5==0)&&(i!=0)) {
    document.write("<br>");
}
}