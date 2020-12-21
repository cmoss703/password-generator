// Assignment Code

var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#startover");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Doubled up the numbers to increase the likelihood that a number will nbe included.
var numberChar = "01234567890123456789".split("")
var specialChar = "!@#$%^&*.-_=+?,:;/~".split("");
var getNum = "";


// Prompt to get number of characters for password.

function getNumber() {
  getNum = prompt("How many characters do you want your password to be? Passwords must be between 8 and 128 characters.");
  getNum = Number(getNum)

  // Alert if the number is outside of the range, forcing the user to go back and enter a valid number.

  if ((getNum < 8) || (getNum > 128)) {
    alert("Password must be between 8 and 128 characters");
    getNumber();
  }

};

// When you click "Generate password", all of this happens.

function generatePassword() {

  var totalArray = [];
  var passwordArray = [];
  var passwordString = "";

  // Calls to function above, prompts number of characters.

  getNumber()

  // Prompts for what kind of characters to use in the password

  var useLower = confirm("Do you want to include lowercase letters?");
  var useUpper = confirm("Do you want to include uppercase letters?");
  var useNumber = confirm("Do you want to include numbers?");
  var useSpecial = confirm("Do you want to use special characters?");

  // Alert if no characters are chosen.

  if ((useLower === false) && (useUpper === false) && (useNumber === false) && (useSpecial === false)) {
    alert("Your password doesn't have any characters to choose from!")
  }

  // Depending on which prompts above are confirmed, adds characters from respective arrays to total criteria array.

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

  // Chooses random items from criteria array and pushes them into a new array, just for the password.
  // The number of characters chosen in the prompt is called to select the number of items in the new array.
  // The length of the total critera array is used in the equation to determine which random numbers to generate.

  for (var i = 0; i < getNum; i++) {
    var count = totalArray.length;
    var randomize = Math.floor(Math.random() * count);
    passwordArray.push(totalArray[randomize]);
  }

  // The new password array is then joined to form a string of characters, the password itself.

  passwordString = passwordArray.join("")

  return passwordString
};

// The function below writes the new password into the generate box.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button

generateBtn.addEventListener("click", writePassword);
