// Assignment code here
var onClick = function () {
    // Alert users about password requirements
    var promptPassword = window.prompt("Please follow the Instructions to generate valid and secure password. Please answer 'yes' or 'no' to continue process for secure and valid password.");
    
    if (promptPassword === "" || promptPassword === null) {
        window.alert("WARNING!!Please enter valid answer.");
        return onClick();
    }

    if (promptPassword ==="no") {
        var confirmRetreat = window.confirm("Are you sure you don't want to set password?"); 

        //if yes (true), leave window
        if (confirmRetreat) {
            window.alert("User decided not to continue");
            return true;
        }
        
        }

        if (promptPassword === "yes"){
            var passwordConditions = window.prompt("Please choose password between 8 to 128 characters. It must have ,one special character', 'one capital-character' and 'one numeric character");
        }

        if (promptPassword.value==" ||textLength<8 || textLength>128") {
            window.alert("Please take another look at Password-Requirements");
            return false;
        
        }
        if (promptPassword.search(/[0-9]/)==-1) {
            window.alert("Please write password which has atleast one Numeric Character");
            return false;
        }


        if (promptPassword.search(/[A-Z]/)==-1) {
            window.alert("Please include atleast one Upper Case Character in your password.");
            return false;
        }

       if (promptPassword.search(/[!@#$%^&*]/)==-1) {
            window.alert("Please include atleast one Special Character in your password.");
            return false;
        }
        
        else {
          window.alert("Congratulations! You've set your password!");
          
        
      }
        return false;

        
};


    
    
    //give user option to leave if they want

    document.getElementById("generate").addEventListener("click",onClick)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
