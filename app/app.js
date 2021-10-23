// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
})

$(() => {
  // Start the player at X
  let currentPlayer = '✕'

  // Our box click event handler
  const onCellClick = (event) => {
    console.log('click')

    // Select the box that was clicked, event.target
    const cell = $(event.target)

    // Set the boxs background to `transparent`
    // So we can see the image behind the box.
    // Then set the text to the current player
    cell.css('background', 'transparent').text(currentPlayer).addClass('no-click')

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  // const onCellHover = (event) => {
  //   const cell = $(event.target)
  //   cell.hasClass('no-click') ? cell.css('cursor', 'not-allowed') : cell.css('cursor', 'pointer')
  // }

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.cell').on('click', onCellClick)
  // $('.cell').on('mouseover', onCellHover)
  // $('.cell').on('mouseout', onCellLeave)
})
