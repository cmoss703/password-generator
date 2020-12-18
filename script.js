// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn);

var numChar = prompt("How many characters?");
numChar = Number(numChar)

console.log(typeof numChar);

var specialChar = confirm("Do you want to use special characters?");

console.log(typeof specialChar)

var spChars = ["/", "_", "-", "!"]

var passwordString = ""

// Write password to the #password input

function generatePassword() {

  if ((numChar < 8) || (numChar > 128)) {
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
