// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of possible password characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['~', '!', '@', '#', '$', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?', '>', '<', '{', '}', '|'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



// Function to intake user input and validate parameters
function userInput() {

    var validation = false;

    do {
      var length = prompt("Please choose length of password between 8 and 128 characters");
      var confirmNumbers = confirm("Does password require numbers?");
      var confirmLowerCase = confirm("Does password require lower case letters?");
      var confirmUpperCase = confirm("Does password require upper case letters?");
      var confirmSymbols = confirm("Does password require symbols?");
      
      var passwordTxt = {

        length: length,
        confirmNumbers: confirmNumbers,
        confirmLowerCase: confirmLowerCase,
        confirmUpperCase: confirmUpperCase,
        confirmSymbols: confirmSymbols
      }
       
      if((length < 8)||(length > 128))
      alert("Choose number between 8 and 128");
      else if((!confirmNumbers)&&(!confirmLowerCase)&&(!confirmUpperCase)&&(!confirmSymbols))
      alert("Must choose at least one type.");
      else
      validation = true;
  
    } while(!validation);

    return passwordTxt;

  }


  // combines user parameters to generate password
  function generatePassword() {
    var passwordCombo = userInput();
    var typeArr = [];
    var generatedPass = "";
  
  
    //pushes user defined parameters into type array to be used as possible options
    if (passwordCombo.confirmNumbers) {
      for (var i of numbers)
        typeArr.push(i);

    }

    if (passwordCombo.confirmLowerCase) {
      for (var i of lowerCase)
        typeArr.push(i);

    }

    if (passwordCombo.confirmUpperCase) {
      for (var i of upperCase)
        typeArr.push(i);

    }

    if (passwordCombo.confirmSymbols) {
      for (var i of symbols)
        typeArr.push(i);

    }
  
  
    //generates password of requested length

    for (var i = 0; i < passwordCombo.length; i++) {
      generatedPass += typeArr[Math.floor(Math.random() * typeArr.length)];
      
    }
  
    return generatedPass;
  }
  
  //Writes password
  function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }

  //event listener for generate button
  generateBtn.addEventListener("click", writePassword);