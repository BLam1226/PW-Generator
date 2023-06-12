// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function generatePassword() {
  // Prompt for password criteria
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
  // Validate the length input
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length! Enter the length of the password (between 8 and 128 characters):"));
  }
  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Validate that at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }
  
  // Define character pools based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  var password = "";
  
  // Generate the password based on selected criteria
  while (password.length < length) {
    if (includeLowercase && password.length < length) {
      password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    }
    if (includeUppercase && password.length < length) {
      password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    }
    if (includeNumeric && password.length < length) {
      password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
    }
    if (includeSpecial && password.length < length) {
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
  }
  
  return password;
}

// Call the generatePassword function when the button is clicked
document.getElementById("generateButton").addEventListener("click", function() {
  var password = generatePassword();
  alert("Your generated password is: " + password);
});
