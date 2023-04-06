function randomGenerator(listCombined) {
  const randomIndex = Math.floor(Math.random() * listCombined.length);
  return listCombined[randomIndex];
}

function generatePassword(length) {
  let listCombined = "";
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
  const allCharacters =
    listLettersLower + listLettersUpper + listNumbers + listCharacters;
  for (let i = 0; i < length; i++) {
    listCombined += randomGenerator(allCharacters);
  }
  return listCombined;
}

console.log(generatePassword(15));
