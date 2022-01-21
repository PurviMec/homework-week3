var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowArray = lowerCase.split(" ");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

window.onload = alert('Welcome to password generator!');
// Assignment code here
var onClick = function () {
  var allCharacters = [];
  var resultPass = "";

  var length = prompt("Please input nubers to adjust your password length!");

  if(length < 8 || length > 128 ) {
      alert("Your password should have min length of 8 and max length of 128");
  }

  else{
    if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(allCharacters, upArray);
    }

    if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(allCharacters, lowArray);
    }

    if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(allCharacters, numArr);
    }

    if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(allCharacters, symArr);
    }

    if(allCharacters.length === 0){
        alert("You must select at lease 1 special character to generate a password and Please start over.");
    }

    else{
      for(var i=0; i < length; i++){
          var randomPass = Math.floor(Math.random() * allCharacters.length);
          resultPass += allCharacters[randomPass];
      }
  }
  }
  document.getElementById("password").innerHTML = resultPass;
}

function copyPass(){

  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
  // Alert users about password requirements
//   var promptPassword = window.prompt("Please input nubers to adjust your password length!.");
  
//   if (promptPassword === "" || promptPassword === null || length < 8 || length > 128) {
//       window.alert("WARNING!!Please enter valid number.");
//       return onClick();
//   }

//   if (promptPassword ==="no") {
//       var confirmRetreat = window.confirm("Are you sure you don't want to set password?"); 

//       //if yes (true), leave window
//       if (confirmRetreat) {
//           window.alert("User decided not to continue");
//           return true;
//       }
      
//       }

//       if (promptPassword === "yes"){
//           var passwordConditions = window.prompt("Please choose password between 8 to 128 characters. It must have ,one special character', 'one capital-character' and 'one numeric character");
        
//       }

//       if (
//           (passwordConditions.length<8) ||
//           (passwordConditions.length>128) ||
//           (passwordConditions.search(/[0-9]/)==-1) ||
//           (passwordConditions.search(/[A-Z]/)==-1) ||
//           (passwordConditions.search(/[!@#$%^&*]/)==-1) ){
//                window.alert("warning!! Please check password requirements again");
//                return onClick();
//       }
      
//       else {
//           var answer = alert("Your Password is " + passwordConditions);
          
//       }
// };
    
//     //give user option to leave if they want

//     document.getElementById("generate").addEventListener("click",onClick)

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// Add event listener to generate button
