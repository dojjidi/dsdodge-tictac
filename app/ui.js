'use strict'
const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#').text('Signed up successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  $('#movies-display').text('Signed in successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#before-sign-in').hide()

  $('#after-sign-in').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in failed')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
  $('#movies-display').text('Logout Successful!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#error-message').text('Logout Unsuccessful')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
