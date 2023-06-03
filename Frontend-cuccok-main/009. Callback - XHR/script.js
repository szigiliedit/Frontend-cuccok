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

const eredmeny4 = lotto.filter(veletlen_szam => ((veletlen_szam % 5 ===0)) && (veletlen_szam%3 === 0));                //Ez kiválogatja a tömbből az 5-el és 3-mal is maradék nélkül osztható számokat.

for (i=1; i<lotto.length; i++)
{
    if(veletlen_szam % 3 && veletlen_szam % 5)
    {
        console.log(`Eredeti tömb = ${lotto}, öttel és hárommal maradék nélkül osztható számok a tömbben = ${eredmeny4}`);
    }
}

console.log(`Eredeti tömb = ${lotto}, öttel és hárommal maradék nélkül osztható számok a tömbben = ${eredmeny4}`);



const eredmeny5 = lotto.filter(veletlen_szam => (veletlen_szam % 2) === 0);                //Ez kiválogatja a tömbből a 2-vel maradék nélkül osztható, azaz páros számokat és egy táblázatba írja ki.

console.table(eredmeny5);

const eredmeny6 = lotto.filter(veletlen_szam => (veletlen_szam % 3) === 0);                //Ez kiválogatja a tömbből a 3-al maradék nélkül osztható számokat és egy táblázatba írja ki.

console.table(eredmeny6);

const eredmeny7 = lotto.filter(veletlen_szam => (veletlen_szam % 5) === 0);                //Ez kiválogatja a tömbből az 5-el maradék nélkül osztható számokat és egy táblázatba írja ki.

console.table(eredmeny7);

const eredmeny8 = lotto.filter(veletlen_szam => ((veletlen_szam % 5 === 0)) && (veletlen_szam%3 === 0));                //Ez kiválogatja a tömbből az 5-el és 3-mal is maradék nélkül osztható számokat és egy táblázatba írja ki.

for (i=1; i<lotto.length; i++)
{
    if(veletlen_szam % 3 && veletlen_szam % 5)
    {
        console.log(`Eredeti tömb = ${lotto}, öttel és hárommal maradék nélkül osztható számok a tömbben = ${eredmeny4}`);
    }
}

console.table(eredmeny8);



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 25);
  myDisplayer(result);