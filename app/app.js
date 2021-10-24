// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events.js')
let currentPlayer = '✕'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
// const winCons = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
})

$(() => {
  // Start the player at X

  // win / tie function

  // Our box click event handler

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.cell').on('click', onCellClick)
})

// start game function
$(() => {
  const startGame = () => {
    console.log('game start')
    $('.cell').text('')
    $('.cell').removeClass('no-click')
    $('.board').removeClass('no-click')
    $('#win-declaration-message').text('').removeClass('text-success')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 'X'
    turnCount = 0
  }

  $('.start-button').on('click', startGame)
})

$(() => {
  // restart function
  const restartGame = () => {
    console.log('restart game')
    $('.cell').text('')
    $('.cell').removeClass('no-click')
    $('.board').removeClass('no-click')
    $('#win-declaration-message').text('').removeClass('text-success')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 'X'
    turnCount = 0
  }
  $('.restart-button').on('click', restartGame)
})

const onCellClick = (event) => {
  console.log('click')
  console.log(event)
  gameBoard[event.target.id] = currentPlayer
  console.log(gameBoard)
  const cell = $(event.target)
  cell.css('background', 'transparent').text(currentPlayer).addClass('no-click')
  turnCount++
  console.log(turnCount)
  checkWin()
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
}

function checkWin () {
  if (currentPlayer === gameBoard[0] && currentPlayer === gameBoard[1] && currentPlayer === gameBoard[2]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[3] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[5]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[6] && currentPlayer === gameBoard[7] && currentPlayer === gameBoard[8]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[0] && currentPlayer === gameBoard[3] && currentPlayer === gameBoard[6]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[1] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[7]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[0] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[8]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (currentPlayer === gameBoard[2] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[6]) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text(`${currentPlayer} has won`).addClass('text-success')
  } else if (turnCount === 9) {
    console.log(`${currentPlayer} has won`)
    $('#board').addClass('no-click')
    $('#win-declaration-message').text("It's a draw!")
  }
}
