/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

const removed = me.skills.pop();
console.log(removed);
//stampa "css"
//per rimuovere ultimo elemento si usava me.skills.pop() 

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.*/

const oddNumbers = []; //array vuoto che contiene i numeri dispari
  for (let i = 1; i <=100; i++) {
    if (i % 2 !==0) { //se il resto della divisione di i*2 è diverso da zero il valore è dispari
      oddNumbers.push (i); //se il munero è dispari aggiunge all'array oddNumbers
    }
  }

console.log(oddNumbers);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).*/

  var randomNumbers = [];
    for (let i =0; i < 10; i++) {
      const randomNumber = Math.round (Math.random()*100);
      
      randomNumbers.push (randomNumbers);
    }

    console.log(randomNumbers);

    let ar = [];
    for(var i=0; i<10; i++) {
      ar[i] = Math.random() * (100);
    }

    console.log(ar);


/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.*/

  var numbers = [25, 8, 52, 6, 11, 20, 18, 12, 68, 100]; 

  const evenNumbers = numbers.filter(function(numbers) {  //funzione callback
    
    return numbers%2 === 0;  //se il numero corrente è pari veiene aggiunto nell'arrey 
  });
    
  console.log(evenNumbers);
  // Risultato Stampa numeri pari della Array

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.*/

let cat = [25, 8, 52, 6, 11, 20, 18, 12, 68, 100];

let somma = 0;
  for(let i = 0; i < arr.length; i++) {
    somma += cat[i];
}

console.log(somma);


/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

/*let arTwo =[];
for(var i = 0; i < arTwo.length; i++){
arTwo[i]++;
}*/

function incremento(arr) { 
  return arr.map(val => {
    if(typeof val === "number"){  //typeof controlla se il numero è stato restituito
      return val +1;
    }
  })
}

  const values = [1, 'a', 3, 'b'];
  const incrementAdValues = incremento(values);
  console.log(incrementAdValues); 

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.*/

const arr7 = [1,4,7,9,6,4,5];

for(let i = 0; i < arr7.length; i++) {  //lenght permette di prendere tutto il contenuto dell'array
  if (arr7[i] % 2 === 0) {
    arr7.splice(i--,1)     
    //splice consente di rimuovere o aggiungere un elemento in una determinata posizione dell'array
  }
}
console.log(arr7);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.*/

const arr8 = [];
while (arr8.length < 10) {
  const rand = Math.floor(Math.random() * 101 + 1)
  if (!arr8.includes(rand)){
    arr8.push(rand)
  }
}

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]*/

  /*let str = ["EPICODE", "is", "great", "Android"]; // [7, 2, 5, 7]

    function strLen(arr) {
      let resArr = [];
      for(let i = 0; i < arr.length; i++) {
        posLen = arr[i].length;
        resArr[i] = posLen;
      }
      return(resArr);
    }
    console.log(strLen(str));*/

    function strLen2(arr){
      let arr2 = [];
      for(let i=0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
          arr2.push(arr[i].length);
        } else {
          arr2.push(arr[i]);
        }
      }
      return(arr2);
    }

    let srt2 = ["EPICODE", "is", "great"];
    let str2new = strLen2(str2);
    
    console.log();



/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

function RevArr(arr) {
  let arr2=[];
  for(let i = arr.length -1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}
let tmpArr = [8,10,45, "a"];
let resArr = RevArr(tmpArr);
console.log(resArr);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.*/

  function getMaxValue(arr) {
    let max = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  let arr8 = [11, 5, 56, 33, 77];
  console.log(getMaxValue(arr8));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.*/

  let olderFilm;
  for(let movie of movies) {
    if(olderFilm === undefined) {
      olderFilm = movie;
    } else {
      if(parseInt(movie.Year) < parseInt(olderFilm.Year)) {
        olderFilm = movie;
      }
    }
  }

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

console.log(movies.length);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.*/

let titles = [];
for(let movie of movies) {
  titles.push(movie.Title);
}
console.log(titles);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/*let currentMovies = [];
for(let movie of movies) {
  if(parseInt(movie.Year) = 2000) {
    currentMovies.push(movie);
  }
}
console.log(currentMovies);*/

const currentMillenniumMovies = movies.filter(movie => {
  const year = movie.Year;
  return year >= 2000 && year <= 2099;
});

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.*/

  const id = 'tt0355702'
  for(let movie of movies) {
    if(movie.imdbID === id) {
      console.log(movie);
      break;
    }
  }

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.*/

  let somma = 0;
  for(let movie of movies) {
    somma += parseInt(movie.Year);
  }
  console.log(somma);

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.*/

  function getMoviesWith(word) {
    let result = [];
    for(let movie of movies) {
      if(movie.Title.includes(word)) {
        result.push(movie);
      }
    }
    return result;
  }

  console.log(getMoviesWith('Avengers'));

  // oppure

  const word = 'Lord';
const moviesContainingWord = movies.filter(movie => {
  // Verifichiamo se il titolo del film contiene la parola cercata
  return movie.Title.includes(word);
});
