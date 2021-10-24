const authEvents = require('./events.js')
let currentPlayer = '✕'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let turnCount = 0

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
})

$(() => {
  $('.cell').on('click', onCellClick)
})

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
