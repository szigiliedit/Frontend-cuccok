// típuskonverziók:
//**********************
/*let value = true; // boolean - igaz / boolean - hamis - false
console.log(typeof value);
value = String(value); // típus-kényszerítés!
console.log(typeof value);
console.log("6" / "2"); // automata konvertálás számmá!*/
/*
let str = "123";
console.log(typeof str); // string lesz alapértelmezetten!
let num = Number(str);
console.log(typeof num); // típuskényszerítés számmá!
num = num + 1.2;
console.log(num); // 124.2
console.log(typeof num); // ez is csak simán Number lesz!

let age = Number("tizennyolc");
console.log(age); // NaN - nem értelmezhető
// Numerikus átalakítás eredményei lehetnek:
// undefined - nem értelmezhető a feladat -> NaN
//null -> 0
// true v. false (igaz-hamis) -> 1 és 0
//string -> leveszi a whitespace-karaktereket (\t, \n stb)
//üres string -> 0
*/
console.log(Number("  123   ")); // 123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Boolean-konverzió:
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
