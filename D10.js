/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// RISPOSTA A
/*
const sum = 10 + 20;

console.log(sum);
*/

// volendo si poteva anche fare:

/*
const sum = function (x, y) {
  return x + y;
};

console.log(sum(10, 20));

*/

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// RISPOSTA B
/*
const random = Math.floor((Math.random()*20))

console.log (random)
*/

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

//RISPOSTA C

/*
const me = {
  firstName: 'Nino',
  secondName: 'Traveso',
  age: 25
}

console.log(me)

*/

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

//RISPOSTA D

/*
delete me.age

console.log(me)
*/

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

//RISPOSTA E

/*

me.skills = ['HTML', 'CSS', 'JavaScript']

console.log(me)

*/

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

// RISPOSTA F

/*

me.skills.push('LaTex') // Questo  aggiunge un nuovo elemento all'array skills, ma causa anche al console.log() precedente di mostrare questa skill

console.log(me)

*/

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

//RISPOSTA G

/*
me.skills.pop([3]) //Bastava anche fare me.skills.pop()

console.log(me)

*/

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

/* RISPSOTA 1

function dice () {

const number = Math.floor((Math.random()*6)+1)

console.log(number)
}

dice()

*/

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// RISPOSTA 2

/* Mi veniva in mente solo una soluzione usando gli array per far si che si potesse cambiare i number direttamente nella funzione richiamata in fondo.

function whoIsBigger(a,b) {
  let x = [];
  let y = [];

  x.push(a)
  y.push(b)

  if (x > y) {
    console.log('x is bigger than y:', 'x=',x, 'y=',y)
  } else if (x < y) {
    console.log('y is bigger than x:',  'x=',x,'y=',y)
  } else 
  console.log('x is equal to y:', 'x=',x, 'y=',y)

}

whoIsBigger(2,3)
*/

// Volendo si poteva anche fare cosi' (mi e' venuto in mente ora farlo simile al mio sopra)

/*

function numberCompare(a, b) {
  const x = a;
  const y = b;

  if (x > y) {
    console.log("x is bigger than y:", "x=", x, "y=", y);
  } else if (x < y) {
    console.log("y is bigger than x:", "x=", x, "y=", y);
  } else console.log("x and y are equal:", "x=", x, "y=", y);
}

numberCompare(2, 3);

*/

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// RISPOSTA 3

/*

function splitMe(phrase) {
  let inputPhrase = phrase;

  let newPhrase = phrase.split(" ");

  console.log(newPhrase);
}

splitMe("Take the cannoli");

*/

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// RISPOSTA 4

/*
function deleteOne (phrase, boolean) {

  let string = phrase

  if (boolean === true){
    console.log(string.slice(1))
  } else if(boolean === false) {
    console.log(string.slice(0, -1))
  } else 
  console.log("Please input a string, following a comma, and a boolean parameter (true or false)")

};

deleteOne()

*/

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
// ESERCIZIO 5

/*
function onlyLetters(input) {
  let string = input;

  const removeNumbers = string.replace(/[0-9]/g, '');

  console.log(removeNumbers)
  }

onlyLetters("C1I2AO4");

*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// RISPOSTA 6

/* Dopo 40 minuti vado avanti per provare a fare gli altri, se ho tempo ci ritorno

function isThisAnEmail(username, chiocciola, sito) {
  let userName = username;
  let at = chiocciola;
  let website = sito;
  if (
    username.includes("abcdefghijklmnopqrstuvwxyz1234567890") &&
    chiocciola.includes("@") &&
    sito.includes(
      "abcdefghijklmnopqrstuvwxyz1234567890",
      ".",
      "abcdefghijklmnopqrstuvwxyz1234567890"
    )
  ) {
    console.log(username + chiocciola + sito);
  } else console.log("This is not a valid email");
}
isThisAnEmail();

*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

//RISPOSTA 7

/*
function whatDayIsIt () {
  const date = new Date ()
  console.log("Today's date according to your browser is:", date)
}

whatDayIsIt()

*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// RISPOSTA 9

//CI TORNO DOPO SE HO TEMPO :)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// RISPOSTA 10

/*
function isTodayMyBirthday() {
  
  const birthday = new Date("2023-06-09");
  const date = new Date();

  if (
    date.getMonth() === birthday.getMonth() &&
    date.getDay() === birthday.getDay()
  ) {
    console.log("It's your birthday! :D");
  } else console.log("It's not your birthday. :_)");
}

isTodayMyBirthday();

*/

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

//RISPOSTA 12

// Per questo esercizio ho riguardato i miei appunti su esercizi passati

/*
const newestMovie = function () {
  let newMovie = movies[0];

  movies.forEach((movie) => {
    if (parseInt(movie.Year) > parseInt(newMovie.Year)) {
      newMovie = movie;
    }
  });

  return newMovie;
};

console.log("This is newest movie in our movie list:", newestMovie());

*/

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

// RISPOSTA 13

/*
function countMovies () {
const arrayOfMovies = []

for (const title of movies) {
  if (title.hasOwnProperty('Title')) {
    arrayOfMovies.push(title.Title);
  }
}

let numberOfMovies = arrayOfMovies.length
console.log(numberOfMovies);

}

countMovies()

*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

//RISPOSTA 20

/*

function selectIdContainer() {
const id = document.getElementById('container')
}

selectIdContainer()
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// RISPOSTA 21

/*
function selectAllTdTagsInDocument() {
const selectAllTdTags = document.querySelectorAll('td')
}

selectAllTdTagsInDocument()
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

//RISPOSTA 24

/* 
function addLiToMyUlList(add) {

  const list = document.getElementById("myList");

  const addLiToUl = document.createElement("li");

  addLiToUl.innerText = add;

  list.appendChild(addLiToUl);
}

*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

//RISPOSTA 26

/*
const allTr = document.querySelectorAll("tr");
allTr.classList.add('test')
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/*
function isItPrime(number) {
  const numberList = [];

  let totalDivisions = [];

  for (let i = 2; i <= number; i++) {
    numberList.push(i);
  }

  for (let i = 0; i < numberList.length; i++) {
    if (number % numberList[i] === 0) {
      totalDivisions.push(numberList[i]);
    }
  }

  if (totalDivisions.length === 1) {
    console.log(
      true,
      "The number is prime as it can only be divide by itself or one:",
      number
    );
  } else if (number === 0 || number < 0) {
    console.log(
      false,
      "The number is NOT a prime as it's equal to 0 or it's negative:",
      number
    );
  } else {
    console.log(
      false,
      "The number is NOT a prime as it's divisible by other numbers between 1 and itself:",
      number
    );
  }
}

isItPrime(2);

*/

// Here is another piece of code I was trying to build to answer to question 29

/*
function isItPrime(input) {


  for (let i = 2; i <= input; i++) {
    if (input % i >= 2 || input % i > 2) {
      console.log("It's not a prime");
      break;
    } else if (input % i >= 2) {
      console.log("it's a prime");
      break;
    } else input < 0 || input === 0;
    console.log("The number is not positive");
    break;
  }
}

isItPrime(2);
*/
