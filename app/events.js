'use strict'

// const { CleanPlugin } = require('webpack')
const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// user must be able to sign up
const onSignUp = function (e) {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (e) {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api
    .signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// game status - whether the game is active - status of the board at the start of the game
// what player is active at the start of the game

// let currentPlayer = 'x'
// let gameBoard = ['', '', '', '', '', '', '', '', '']

// // signed in user must be able to start a game
// startGame()
// // must start as x and rotate between x and o
// function switchTurns() {

//   // add display current player

// }
// // must only select available spaces

// // user must be notified of win or tie

// // must no longer be able to add to board if game is over

// // user must be able to play again after
// restartButton.addEventListener('click', startGame)

// // game logic

// // establish x and circle classes and win conditions/combinations
// const x_class = 'x'
// const o_class = 'o'
// const winCons = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

//   if (e.target.id === 0) {
//     playChoice(cell, currentClass)
//   } else if (e.target.id === 1) {
//     playChoice(cell, currentClass)
//   } else if (e.target.id === 2) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 3) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 4) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 5) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 6) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 7) {
//     playChoice(cell, currentClass)
//   }
//   else if (e.target.id === 8) {
//     playChoice(cell, currentClass)
//   }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
