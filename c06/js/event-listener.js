function checkUsername() {                             // Declare function
  var str = this.id;
  var zippydee = this.value[0];
  var elMsg = document.getElementById('feedback' + str[str.length-1]);     // Get feedback element
  if (this.value.length < 5) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }

  var check = zippydee.toLowerCase()
  var flag = 0;
  switch(str[str.length-1]) {
    case "0":
        if(check == "a" || check == "b" || check == "c"){
          flag = 1;
        }
        break;
    case "1":
        if(check == "d" || check == "e" || check == "f"|| check == "g" || check == "h"){
          flag = 1;
        }
        break;
    case "2":
        if(check == "i" || check == "j" || check == "k"|| check == "l" || check == "m"){
          flag = 1;
        }
        break;
    case "3":
        if(check == "n" || check == "o" || check == "p"){
          flag = 1;
        }
        break;
    case "4":
        if(check == "q" || check == "r" || check == "s"|| check == "t" || check == "u" || check == "v"|| check == "w" || check == "x" || check == "y"|| check == "z"){
          flag = 1;
        }
        break;
    default:
        flag=0;
  }  
  if(flag==0){elMsg.textContent='Username must start with correct letter'};
}
  
for (i = 0; i < 5; i++) { 
    var elUsername = document.getElementById('username' + i);
	elUsername.addEventListener('blur', checkUsername, false);
}

//var elUsername = document.getElementById('username0');  // Get username input
// When it loses focus call checkUsername()
//elUsername.addEventListener('blur', checkUsername, false);