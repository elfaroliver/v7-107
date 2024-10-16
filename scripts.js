/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

// Enska verður notuð í variables því "orð" er eins í eintölu og fleirtölu, word og words hinsvegar..

function longest(str) {
  // Útfæra
  // Splitta setningu í nokkur orð
let words = str.split(' ');
let longestWord = '';
  
for (let i = 0; i < words.length; i++) {
  // Skoðar ef núverandi orð er lengra en lengsta
  if (words[i].length > longestWord.length) {
      longestWord = words[i]; // Uppfærir ef nýjasta er lengra en fyrrverandi lengsta
  }
}
return longestWord;
}

/*function shortest(str) {
  // Útfæra
let words = str.split(' ');
let shortestWord = '';
//let shortestWord = words[0];

if (words.length === 0) {
  return '';
}
  
for (let i = 0; i < words.length; i++) {
  // Skoðar ef núverandi orð er lengra en lengsta
  if (words[i].length > shortestWord.length) {
      shortestWord = words[i]; // Uppfærir ef nýjasta er lengra en fyrrverandi lengsta
  }
}
return shortestWord;
}*/

function shortest(str) {
  // Splittar input í orð
  let words = str.split(' ').filter(word => word.length > 0); // Filterar út tóm orð, bil þ.e.a.s.

  // Finnur gild orð, orð hafa lágmarks lengd 1
  if (words.length === 0) {
      return ''; // Skilar tómum streng ef input er tómt
  }

  // Skráir fyrsta orðið sem stysta og vinnur þaðan í for loop fyrir neðan
  let shortestWord = words[0];

  // Loopar í gegnum input og byrjar á orði 0 og 1, 
  // ber saman og skiptir út ef 1 er styttra en 0 o.s.frv.
  for (let i = 1; i < words.length; i++) {
      // Hérna specifically er skoðað 0 og 1, 1 og 2, o.s.frv. með <
      if (words[i].length < shortestWord.length) {
          shortestWord = words[i]; // Uppfærir shortestWord ef núverandi orð er styttra
      }
  }
  return shortestWord; 
}

function reverse(str) {
  // Útfæra
  if(isString(str)) {
    // Splittar(split('')) orðinu í array af char
    const split = str.split('');
    // snýr(reverse()) arrayinu við
    const reversed = split.reverse();
    // og tengir(join()) aftur saman
    return reversed.join('');
  }
  return null;
}
console.assert(reverse('halló') === 'óllah', 'reverse: snýr við einföldum streng')
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null')

// 1. (ekki palindrome) "halló" => false
// 2. (palindrome) "hah" => true
// 3. (ólöglegt inntak) null / false / 0 => ?
// 4. "" ??? => false
// 5. "Hah" ??? => true
function palindrome(str) {
  // Útfæra
  // Skoðar hvort str sé ekki strengur(3.) og hvort strengur sé tómur(4.)
  if (!isString(str) || str !== '') {
    // Snýr streng við
    const reversed = reverse(str)
    // Returnar str sem lowercase og jafngildir við reversed, þar með lowercasear og flippar/speglar(5.)
    return str.toLowerCase() === reversed.toLowerCase()// (2.)
  }
  return true;//(1.)
}

/*function vowels(str) {
  // Skoðar ef input er string
  if (!isString(str)) return ''; 
  // Skoðar ef strengur ef tómur, ef tómur þá prentar forritið 0
  if (str === '') return 0;
  return str.split('').filter(char => VOWELS.includes(char.toLowerCase())).join('');
}

function consonants(str) {
  // Skoðar ef input er string
  if (!isString(str)) return '';
  // Skoðar ef strengur ef tómur, ef tómur þá prentar forritið 0
  if (str === '') return 0;
  return str.split('').filter(char => CONSONANTS.includes(char.toLowerCase())).join('');
}*/

function vowels(str) {
  // Skoðar ef input er string
  if (!isString(str)) return ''; 
  // Skoðar ef strengur ef tómur, ef tómur þá prentar forritið 0
  if (str === '') return 0;

  const foundVowels = str.split('').filter(char => VOWELS.includes(char.toLowerCase()));
  return foundVowels.length === 0 ? 0 : foundVowels.join('');
}

function consonants(str) {
  // Skoðar ef input er string
  if (!isString(str)) return '';
  // Skoðar ef strengur ef tómur, ef tómur þá prentar forritið 0
  if (str === '') return 0;

  const foundConsonants = str.split('').filter(char => CONSONANTS.includes(char.toLowerCase()));
  return foundConsonants.length === 0 ? 0 : foundConsonants.join('');
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  let haldaAfram;

  do {
  // Útfæra
  // Prentar þegar forrit er opið, segir hvað forritið gerir
  alert("Þetta forrit sýnir ákveðna eiginleika strengs sem er fenginn frá notanda. Eiginleikarnir eru:\n" +
        "1. Forritið skilar lengsta orði inntaks.\n" +
        "2. Forritið skilar stysta orði inntaks.\n" +
        "3. Forritið snýr inntaki.\n" +
        "4. Ef inntak er eins frá miðju, t.d. mom eða radar þá staðfestir forritið\n" +
        "    hvort inntakið er palindróma.\n" +
        "5. Forritið sýnir alla sérhljóða inntaks.\n" +
        "6. Forritið sýnir alla samhljóða inntaks.\n");
  // Læt user slá inn orð/setningu/línu
  let userInput = prompt("Vinsamlegast skrifaðu eitthvað");

  // Assigna functionin við variables sem ég prenta út seinna
  let lengstaOrd = longest(userInput);
  let stystaOrd = shortest(userInput);
  let snúaStreng = reverse(userInput);
  let tjekkaPalind = palindrome(userInput);
  let foundVowels = vowels(userInput);
  let foundConsonants = consonants(userInput);

  // Prenta results
  alert("Lengsta orð: " + lengstaOrd +
    "\nStysta orð: " + stystaOrd +
    "\nSnúið inntak: " + snúaStreng +
    "\nEr þetta palindróma? " + (tjekkaPalind ? "Já" : "Nei") +
    "\nSérhljóðar: " + foundVowels +
    "\nSamhljóðar: " + foundConsonants);

    // Leyfi user að halda áfram
    haldaAfram = prompt("Viltu keyra forritið einu sinni enn? (Já/Nei)");
  } while (haldaAfram && haldaAfram.toLowerCase() === 'já'); // Skoðar ef user input er 'já'
}


start();
