// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]+\/=";
var chosenCharacters = "";

// Write password to the #password input
function writePassword() {
chosenCharacters = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  var length = prompt("How many characters in your random password? (between 8 and 128)");
if (isNaN(length) || length < 8 || length > 128) {
alert("Please choose numbers between 8 - 128!");
return generatePassword();
}
var hasUpper = confirm("Include upper case letters?");
var hasLower = confirm("Include lower case letters?");
var hasNumbers = confirm("Include numbers?");
var hasSpecial = confirm("Include special characters?");
if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
alert("You must at least choose 1 character type!");
return generatePassword();
}
// if statment checks for the four boolean variables
if (hasUpper) {
chosenCharacters += upper;
}
if (hasLower) {
chosenCharacters += lower;
}
if (hasNumbers) {
chosenCharacters += numbers;
}
if (hasSpecial) {
chosenCharacters += special;
}
for (var i = 0; i < length; i++) {
result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}
