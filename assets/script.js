// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  const length = parseInt(prompt("How long would you like your password to be? (8-64): "));

  //Prompt for character type
  const uppercase = prompt("Please include uppercase letters");
  const lowercase = prompt("please include lowercase letters");
  const digits = prompt("include digits? yes/no: ").toLowerCase() === "y";
  const symbols = prompt("include symbols? yes/no: ").toLowerCase() === "y";

  //passwords returned as objects
  return {
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    digits: digits,
    symbols: symbols,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  
  //geenerate random index btwn 0 and last index of the array
  const randomIndex = Math.floor(Math.random() * arr.length);

  //return the element
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {

  const options = getPasswordOptions();

  const characterSets = {
    uppercase: [],
    lowercase: [],
    digits: [],
    symbols: [],
  };


  let characterSet = " ";
  if (options.uppercase) {characterSet += characterSets.uppercase;}

  if (options.lowercase) {characterSet += characterSets.lowercase;}

  if (options.digits) {characterSet += characterSets.digits;}

  if (options.symbols) {characterSet += characterSets.symbols;}

  //password generated
  let password = " ";
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length); 
    password += characterSet[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);