// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn);

var getNum = prompt("How many characters?");
getNum = Number(getNum)

// console.log(typeof getNum);

var useLower = confirm("Do you want to include lowercase letters?");
var useUpper = confirm("Do you want to include uppercase letters?");
var useNumbers = confirm("Do you want to include numbers?");
var useSpecial = confirm("Do you want to use special characters?");

// var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
//   "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");

// console.log(lowercaseChar[4]);

// var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
//   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var numberChar = "123456789".split("");
numberChar = Number(numberChar)

// console.log(typeof numberChar)

var specialChar = "!@#$%^&*.-_=+\/?,:;".split("");

var passwordString = ""

// Write password to the #password input

function generatePassword() {

  if ((getNum < 8) || (getNum > 128)) {
    alert("Password must be between 8 and 128 characters")
  }

  else {
    
  }

  if (specialChar === true) {

  }

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
