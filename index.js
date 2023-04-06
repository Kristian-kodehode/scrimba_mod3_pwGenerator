const listLettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const listLettersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const listNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const listCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomPasswordGenerator = "";

for (let i = 0; i < 1; i++) {
  const randomLetterU = Math.floor(Math.random() * listLettersUpper.length);
  randomPasswordGenerator += listLettersUpper[randomLetterU];
}

for (let i = 0; i < 12; i++) {
  const randomLetterL = Math.floor(Math.random() * listLettersLower.length);
  randomPasswordGenerator += listLettersLower[randomLetterL];
}

for (let i = 0; i < 1; i++) {
  const randomNumber = Math.floor(Math.random() * listNumbers.length);
  randomPasswordGenerator += listNumbers[randomNumber];
}

for (let i = 0; i < 1; i++) {
  const randomCharacter = Math.floor(Math.random() * listCharacters.length);
  randomPasswordGenerator += listCharacters[randomCharacter];
}

console.log(randomPasswordGenerator);
