// This generates password with math
// First defines length of pw
// Defines character set that gets used in creating the pw
// Initializes an empty string  in a variable called password. It stores the random pw and is used to be called later.

function generatePassword() {
  // initialize the length to 12
  const length = 12;
  // Characterset set in an Array
  const charset = [
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
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
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
  // Initializes an empty string in the variable -password
  let password = "";
  // A for loop that generates a random password to be put inside the password variable
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  // Returns the generated password inside the function

  return password;
}

let btnDisplayPassword = document.getElementById("btnDisplayPassword");

// The function to be called when the button is pushed
btnDisplayPassword.addEventListener("click", function () {
  const password = generatePassword();
  // Password 2 generator ->
  // let password2 = generatePassword();
  // while (password2 === password) {
  //   password2 = generatePassword();
  // }

  document.getElementById("genRndmPw").value = password;
  // document.getElementById("genRndmPwTwo").value = password2;
});
