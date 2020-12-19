// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChar = "0123456789".split("")
var specialChar = "!@#$%^&*.-_=+\/?,:;".split("");
var passwordArray = [];
var passwordString = "";
var getNum = "";
var totalArray = [];

// Write password to the #password input

function generatePassword() {

  var useLower = confirm("Do you want to include lowercase letters?");
  var useUpper = confirm("Do you want to include uppercase letters?");
  var useNumber = confirm("Do you want to include numbers?");
  var useSpecial = confirm("Do you want to use special characters?");

  if ((useLower === false) && (useUpper === false) && (useNumber === false) && (useSpecial === false)) {
    alert("Your password doesn't have any characters to choose from!")
  }

  function getNumber() {
    getNum = prompt("How many characters?");
    getNum = Number(getNum)

    if ((getNum < 8) || (getNum > 128)) {
      alert("Password must be between 8 and 128 characters");
      getNumber();
    }
  };

  getNumber()

  if (useLower === true) {
    totalArray = totalArray.concat(lowercaseChar)
  };

  if (useUpper === true) {
    totalArray = totalArray.concat(uppercaseChar)
  };

  if (useNumber === true) {
    totalArray = totalArray.concat(numberChar)
  };

  if (useSpecial === true) {
    totalArray = totalArray.concat(specialChar)
  };  

  for (var i = 0; i < getNum; i++) {
    var count = totalArray.length;
    var randomize = Math.floor(Math.random() * count);
    passwordArray.push(totalArray[randomize]);

    // passwordString = toString(passwordArray[randomize])
    // console.log(passwordArray[Math.floor(Math.random() * (passwordArray.length - 1))])
  }

  passwordString = passwordArray.join("")

  return passwordString
  // Math.floor(Math.random() * 10);

};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console.log(typeof getNum);

// console.log(lowercaseChar[4]);


// var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
//   "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
//   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// concat() and index