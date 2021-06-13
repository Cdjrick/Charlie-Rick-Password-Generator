// Assignment code here

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let specialChars = [' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '|', '}', '"']


function generatePassword(length, upperAndLower, passNumbers, passSpecialChars) {
  let passCriteria = [alphabet]

  if(passNumbers) {
    passCriteria.push(numbers)
  } 
  
  if(passSpecialChars) {
    passCriteria.push(specialChars)  
  }

  let password = ''

  for(i = 0; i < length; i++) {
    let chosenCriteria = Math.floor(Math.random() * passCriteria.length)
    let criteria = passCriteria[chosenCriteria]

    let chosenChar = Math.floor(Math.random() * criteria.length)
    let char = criteria[chosenChar]

    if(upperAndLower) {
      let toUpperCase = Boolean(Math.floor(Math.random() * 1))
      if (toUpperCase) {
        alphabet.toUpperCase()
      }
    }

    password += char
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = 0

// Write password to the #password input
function writePassword() {
  let length = prompt('How long would you like your password to be? Enter a number between 8 and 128.')

  if(length < 8) {
    alert('Password length too short')
    return
  } else if(length > 128) {
    alert('Password length too long')
    return
  }

  let upperAndLower = confirm('Would you like uppercase and lowercase letters?')
  let passNumbers = confirm('Would you like numbers in your password?')
  let passSpecialChars = confirm('Would you like special characters in your password?')

  if(!upperAndLower && !numbers && !specialChars) {
    return
  } 

  var password = generatePassword(length, upperAndLower, passNumbers, passSpecialChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
