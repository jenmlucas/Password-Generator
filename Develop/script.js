// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// storage
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var specialCharacters = ["!", "#", "$", "%", "&", "@"]


// Assignment code here
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?");
  var specialConfirmed = prompt("Do you want to use special characters?");
  var numbersConfirmed = prompt("Do you want to use numbers?")
  var upperConfirmed = prompt ("Do you want to use uppercase letters?")

  var characters = [];
  if (specialConfirmed) {
    characters = characters.concat(specialCharacters, lowercaseLetters);
}
  console.log(characters);

  var numbers = [];
  if (numbersConfirmed) {
    numbers = numbers.concat(specialCharacters, lowercaseLetters, numeric);
  }
  console.log(numbers);


  var uppercase = [];
  if (upperConfirmed) {
    uppercase = uppercase.concat(specialCharacters, lowercaseLetters, numeric);
    uppercase = uppercase.concat(uppercaseLetters);
  }
  console.log(uppercase);

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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
