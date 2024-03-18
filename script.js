let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#number')
const guess = document.querySelector('#guesses')
const remaining = document.querySelector('#remaining')
const lowOrHigh = document.querySelector('.loworhigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess1 = parseInt(userInput.value)

        console.log(guess1);
        validateGuess(guess1);
    })
}

function validateGuess(guess1) {
    if (isNaN(guess1)) {
        alert('Please enter a valid number ')
    } else if (guess1 < 1) {
        alert('Please enter a number more than or equal to 1 ')
    } else if (guess1 > 100) {
        alert('Please enter a number less than or equal to 100 ')
    } else {
        prevGuess.push(guess1)
        if (numGuess > 10) {
            displayGuess(guess1);
            displayMessage(`Game over. Random number was ${random}`)
            endGame()
        } else {
            displayGuess(guess1)
            checkguess(guess1)

        }
    }

}

function checkguess(guess2) {
    if (guess2 === random) {
        displayMessage('You guessed it right')
        endGame()
    } else if (guess2 < random) {
        displayMessage(`Number is Too low`)

    } else {
        displayMessage(`Number is Too high`)
    }
}

function displayGuess(guess3) {
    userInput.value = ''
    guess.innerHTML += `${guess3}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}<h2>`
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guess.innerHTML = ''
        userInput.removeAttribute('disabled')
        remaining.innerHTML = `${11 - numGuess}`
        startOver.removeChild(p)
        lowOrHigh.innerHTML = ''
        playGame = true
    })
}

function endGame() {
    userInput.value = ''
    userInput.disabled = true;
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false
    newGame()
}

