// This is the main validator function
function myValidator() {
  styleReset();

  let errorsFound = false;

  // Check length of first and last name
  const FIRSTNAME = document.getElementById('firstName');
  const LASTNAME = document.getElementById('lastName');
  const NAMES = [FIRSTNAME, LASTNAME];
  let name;
  for (name of NAMES) {
    if (name.value.length < 2) {
      activateError('Entry must be at least 2 characters long.', name);
      errorsFound = true;
    }
  }

  // Check that names only contain letters
  const NAMEREGEX = /^[a-zA-Z]+$/;
  for (name of NAMES) {
    if (!NAMEREGEX.test(name.value)) {
      activateError('Entry can not contain numbers, symbols or spaces.', name);
      errorsFound = true;
    }
  }

  // Check that approved facilitator has been entered
  const FACILITATORREGEX = /^(Josh|Fazil|Chris)$/i;
  const FACILITATOR = document.getElementById('facilitator');
  if (!FACILITATOR.value.match(FACILITATORREGEX)) {
    activateError('Invalid facilitator name. Please enter Josh, Fazil, or Chris', FACILITATOR);
    errorsFound = true;
  }

  if (errorsFound) {
    return false;
  } else {
    return true;
  }
}

// This function makes the error field visible and propegates it with
// an error message.
function activateError (message, location) {
  const ERRORFIELD = document.getElementById('errorField');
  const ERRORMESSAGE = document.getElementById('errorMessage');
  const NEWERROR = document.createElement('li');
  NEWERROR.innerText = message;
  ERRORMESSAGE.appendChild(NEWERROR);
  ERRORFIELD.style.visibility = 'visible';
  location.style.borderColor = 'red';
}

// This function resets the border color of the input boxes for when
// a user fixes their mistake, and hides the error field as well.
function styleReset () {
  const INPUTS = document.getElementsByTagName('input');
  let input;
  for (input of INPUTS) {
    if (input.type === 'text') {
      input.style.borderColor = '#243E36';
    }
  }
  const ERRORFIELD = document.getElementById('errorField');
  ERRORFIELD.style.visibility = 'hidden';
  const ERRORMESSAGE = document.getElementById('errorMessage');
  ERRORMESSAGE.innerText = '';
}
