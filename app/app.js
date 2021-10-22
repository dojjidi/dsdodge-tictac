// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const Events = require('./events')

$(() => {
  $('#sign-up').on('submit', Events.onSignUp)
  $('#sign-in').on('submit', Events.onSignIn)
  $('#sign-out').on('click', Events.onSignOut)
})
