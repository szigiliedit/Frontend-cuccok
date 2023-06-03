/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

k = Math.floor( Math.random()*6 ) + 1
	console.log( k )*/



var szam = [];

for (i=1; i<91; i++)
{
    szam[i-1]=i;
}

//console.log(szam);

function veletlen_szam(a,b)                 //Ez a függvény 90 db random számot generál és azokat írja majd ki.
{
    return 0.5-Math.random();
}

szam.sort(veletlen_szam);                   //Ez a sort függvény gondoskodik arról, hogy a 90 db véletlen számunk ne sorrendben, hanem véletlen sorrendben íródjon ki.

//console.log(szam);

var lotto = [];

for(i=1; i<6; i++)                          //Itt az i<6-tal adtuk meg, hogy a tömbben csak 5 db véletlen szám legyen.
{
    lotto[i-1] = szam[i-1];
}

console.log(lotto);

const eredmeny = lotto.filter(veletlen_szam => (veletlen_szam % 2) === 0);                //Ez kiválogatja a tömbből a 2-vel maradék nélkül osztható, azaz páros számokat.

console.log(`Eredeti tömb = ${lotto}, páros számok a tömbben = ${eredmeny}`);

const eredmeny2 = lotto.filter(veletlen_szam => (veletlen_szam % 3) === 0);                //Ez kiválogatja a tömbből a 3-al maradék nélkül osztható számokat.

console.log(`Eredeti tömb = ${lotto}, hárommal maradék nélkül osztható számok a tömbben = ${eredmeny2}`);

const eredmeny3 = lotto.filter(veletlen_szam => (veletlen_szam % 5) === 0);                //Ez kiválogatja a tömbből az 5-el maradék nélkül osztható számokat.

console.log(`Eredeti tömb = ${lotto}, öttel maradék nélkül osztható számok a tömbben = ${eredmeny3}`);



const eredmeny4 = lotto.filter(veletlen_szam => (veletlen_szam % 2) === 0);                //Ez kiválogatja a tömbből a 2-vel maradék nélkül osztható, azaz páros számokat és egy táblázatba írja ki.

console.table(eredmeny4);

const eredmeny5 = lotto.filter(veletlen_szam => (veletlen_szam % 3) === 0);                //Ez kiválogatja a tömbből a 3-al maradék nélkül osztható számokat és egy táblázatba írja ki.

console.table(eredmeny5);

const eredmeny6 = lotto.filter(veletlen_szam => (veletlen_szam % 5) === 0);                //Ez kiválogatja a tömbből az 5-el maradék nélkül osztható számokat és egy táblázatba írja ki.

console.table(eredmeny6);




  