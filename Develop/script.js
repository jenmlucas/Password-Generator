// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// storage- Arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var specialCharacters = ["!", "#", "$", "%", "&", "@"]

var characterLength = "";

// Assignment code here
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?");
 while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password needs to be 8 or more characters in length and less than 128");
  }
 do {
  var specialConfirmed = confirm("Do you want to use special characters?");
  var uppercaseConfirmed = confirm("Do you want to use uppercase letters?");
  var lowercaseConfirmed = confirm("Do you want to use lowercase leters?");
  var numbersConfirmed = confirm("Do you want to use numbers?");
 }
while (specialConfirmed === false && uppercaseConfirmed === false && lowercaseConfirmed === false && numbersConfirmed === false);



  var characters = [];
  if (specialConfirmed) {
    characters = characters.concat(specialCharacters);
  }
  if (uppercaseConfirmed) {
    characters = characters.concat(uppercaseLetters);
  }
  if (lowercaseConfirmed) {
    characters = characters.concat(lowercaseLetters);
  }
  if (numbersConfirmed) {
    characters = characters.concat(numeric);
  }

  // this is to generate password length with lowercaseLetters
  var builtPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    builtPassword = builtPassword + characters[Math.floor(Math.random() * characters.length)]
  }
  return builtPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
