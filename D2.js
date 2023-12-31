/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 20;
let num2 = 30;
if (num1 > num2) {
  console.log("il più grande è num1!");
} else {
  console.log("il numero più grande è num2");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d = 3;
if (d === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let e = 45;
let f = 5;
if (e % 5 === 0) {
  console.log("è divisibile per 5");
} else {
  console.log("non è divisibile");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let g = 12;
let h = 21;
if (g === 8 || h === 8 || g + h === 8 || g - h === 8 || h - g === 8) {
  console.log("verificato!");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 60;
let shippingcost = 10;
if (totalShoppingCart > 50) {
  shippingcost = 0;
}
let totalcheckout = 0;
totalcheckout = totalShoppingCart + shippingcost;
console.log(" il totale da addebitare è: ", totalcheckout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCarts = 60;
const isTodayBlackFriday = true;
const discount = isTodayBlackFriday ? "20%" : "0%";
let shippingcosts = 10;
if (totalShoppingCarts > 50) {
  shippingcosts = 0;
}
let totalcheckouts = 0;
totalcheckouts = totalShoppingCarts - isTodayBlackFriday + shippingcosts;
console.log(" il totale da addebitare è: ", totalcheckouts);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const Num1 = 3;
const Num2 = 4;
const Num3 = 5;
if (Num1 >= num2 && Num1 >= Num3) {
  if (Num2 >= Num3) {
    console.log(Num1, Num2, Num3);
  } else {
    console.log(Num1, Num3, Num2);
  }
} else if (Num2 >= Num1 && Num2 >= Num3) {
  if (Num1 >= Num3) {
    console.log(Num2, Num1, Num3);
  } else {
    console.log(Num2, Num3, Num1);
  }
} else if (Num3 >= Num1 && Num3 >= Num2) {
  if (Num1 >= Num2) {
    console.log(Num3, Num1, Num2);
  } else {
    console.log(Num3, Num2, Num1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const z = "cadrega";
if (typeof z === "number") {
  console.log("z è un numero!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 10;
let numero1 = 2;
let risultato = numero % numero1;
if (risultato > 0) {
  console.log(" il numero è dispari");
} else {
  console.log(" il numero è pari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val > 5 && val < 8) {
  console.log("Piu di 5 e meno di 8");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.splice(2, 1);
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice(9, 1);
numeri.push(100);
console.log(numeri);
