window.onload = function () {
  greet()

  // This code makes it so you can press enter to submit when you are in the input fields
  const firstNumber = document.getElementById('firstNumber')
  firstNumber.addEventListener('keyup', function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('addBtn').click()
    }
  })

  const secondNumber = document.getElementById('secondNumber')
  secondNumber.addEventListener('keyup', function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('addBtn').click()
    }
  })
}

function greet () {
  // Welcome visitor
  alert('Hello and welcome to my page!')

  // Prompt user for their name
  alert('What is your name?')
  const name = prompt('My name is')

  // Welcome user by name
  const greeting = document.getElementById('greeting')
  if (name) {
    alert('Welcome ' + name)
    greeting.innerHTML = 'Welcome ' + name
  } else {
    alert('Welcome whoever you are!')
  }
}

// First adding function
function adder () {
  let firstNum
  let secondNum
  let continueAdding = true

  // Loop to ensure user can keep adding numbers
  while (continueAdding) {
    // Get first number with validation
    while (isNaN(firstNum) || firstNum === '') {
      firstNum = prompt('What is the first number? (Valid entries only please!)')
    }
    if (firstNum === null) {
      return
    }

    // Get second number with validation
    while (isNaN(secondNum) || secondNum === '') {
      secondNum = prompt('What is the second number? (Valid entries only please!)')
    }
    if (secondNum === null) {
      return
    }

    // Calculate total
    const result = parseFloat(firstNum) + parseFloat(secondNum)

    // Display results
    alert('The sum of your two numbers is: ' + result)

    if (result > 10) {
      alert('That is a big number.')
    } else {
      alert('That is a small number.')
    }

    const logger = document.getElementById('logger')
    var newParagraph = document.createElement('p')
    newParagraph.innerHTML = firstNum + ' + ' + secondNum + ' = ' + result
    logger.appendChild(newParagraph)

    // Prompt for continuation of adding numbers
    if (!confirm('Do you want to continue adding numbers?')) {
      continueAdding = false
    } else {
      firstNum = undefined
      secondNum = undefined
    }
  }
}

// Second adding function
function adder2 () {
  let firstNum = document.getElementsByName('firstNumber')[0].value
  let secondNum = document.getElementsByName('secondNumber')[0].value

  // validation and logging
  if (!isNaN(firstNum) && !isNaN(secondNum) && firstNum !== '' && secondNum !== '') {
    const result = parseFloat(firstNum) + parseFloat(secondNum)

    // Add equation to logger
    const logger = document.getElementById('logger')
    var newParagraph = document.createElement('p')
    newParagraph.innerHTML = firstNum + ' + ' + secondNum + ' = ' + result
    logger.appendChild(newParagraph)

    // Fade out the form
    fadeOutForm()

    // Reset the values in the form
    document.getElementsByName('firstNumber')[0].value = ''
    document.getElementsByName('secondNumber')[0].value = ''
  } else {
    alert('Please enter valid numbers!')
  }
}

// Called when we need to see the adding form
function fadeInForm () {
  const numFormBox = document.getElementById('numFormBox')
  numFormBox.style.visibility = 'visible'
  numFormBox.classList.add('fadeIn')
  if (numFormBox.classList.contains('fadeOut')) {
    numFormBox.classList.remove('fadeOut')
  }
  document.getElementById('firstNumber').focus()
}

// Called when we need to hide the adding form
function fadeOutForm () {
  const numFormBox = document.getElementById('numFormBox')
  numFormBox.classList.add('fadeOut')
  numFormBox.classList.remove('fadeIn')
  setTimeout(function () { numFormBox.style.visibility = 'hidden' }, 125)
}
