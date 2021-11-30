// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


const min = 2;
const max = 4;

// FOREACH
// const newMyArray = [];
// myArray.forEach((name, index) => {
//     if (index <= max && index >= min) {
//         newMyArray.push(name);
//     }
// });

// FILTER
const newMyArray = myArray.filter((listName, index) => {

    return index <= max && index >= min;

});

console.log(newMyArray);
