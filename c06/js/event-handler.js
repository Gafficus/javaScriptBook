function checkUsername() {                            // Declare function
  var str= this.id;
  var elMsg = document.getElementById('feedback' + str[str.length -1]);    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elUsername = document.getElementById('username0'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername1 = document.getElementById('username1'); // Get username input
elUsername1.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername2 = document.getElementById('username2'); // Get username input
elUsername2.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername3 = document.getElementById('username3'); // Get username input
elUsername3.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername4 = document.getElementById('username4'); // Get username input
elUsername4.onblur = checkUsername;  // When it loses focus call checkuserName()
