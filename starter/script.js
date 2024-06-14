'use strict';
const body = document.querySelector('body')
const check = document.querySelector('.check')
const scoreLabel = document.querySelector('.score')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')

let secretNumber = Math.floor(Math.random() * 20);
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

check.addEventListener('click', function() {
    const guess = Number(guessInput.value)
    if (!guess) {
        displayMessage('No number!')
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!')
        number.textContent = secretNumber

        body.style.backgroundColor = '#60b347'
        number.style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        } 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--
            scoreLabel.textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            scoreLabel.textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.message').textContent = 'Start guessing...'

    scoreLabel.textContent = score
    number.textContent = '?'
    guessInput.value = ''

    body.style.backgroundColor = '#222'
    number.style.width = '15rem'
})


// Math.floor() always rounds down.
// Math.trunc() discards the decimal part without rounding.
// Math.ceil() always rounds up.
// Math.round() rounds to the nearest integer, with ties rounding up.



// const checkButton = document.querySelector('.btn.check')
// const againButton = document.querySelector('.btn.again')
// const input = document.querySelector('.guess')
// const screenShowNumber = document.querySelector('.number')
// const screenMessage = document.querySelector('.message')
// const bodyPart = document.querySelector('body')

// let scoreElement = document.querySelector('.score')
// scoreElement.textContent = Number(scoreElement.textContent)

// let highScoreElement = document.querySelector('.highscore')

// const guessNumber = Math.floor(Math.random() * 20);

// checkButton.addEventListener('click', function() {
//     const numberInput = Number(input.value)
//     if (numberInput === guessNumber) {
//         screenShowNumber.textContent = guessNumber
//         screenMessage.textContent = 'Correct Number!'
//         bodyPart.style.backgroundColor = 'green'
//         scoreElement.textContent =  Number(scoreElement.textContent)
//         highScoreElement.textContent = scoreElement.textContent
        
//     } 
//     else {
//         if(Number(scoreElement.textContent) > 0){
//             scoreElement.textContent = Number(scoreElement.textContent) - 1
//             if (numberInput < guessNumber) {
//                 screenMessage.textContent = 'Too low'
//             } else if (numberInput > guessNumber) {
//                 screenMessage.textContent = 'Too high'
//             }
//         }
//         else{
//             screenMessage.textContent = 'You lost the game!'
//         }
//         console.log(guessNumber); 
//     }
    
// })


// againButton.addEventListener('click', function() {
//     input.value = ''
//     scoreElement.textContent = '20'
//     bodyPart.style.backgroundColor = 'rgb(34, 34, 34)'
// })