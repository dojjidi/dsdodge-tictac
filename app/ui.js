'use strict'

const store = require('./store')

const signUpSuccess = function (responseData) {
  $('#response-display').text('Signed up successfully')

  $('#response-display').removeClass()
  $('#response-display').addClass('text-success')

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

  $('#response-display').text('Signed in successfully')
  $('#response-display').removeClass()
  $('#response-display').addClass('text-success')
  $('form').trigger('reset')
  $('#before-log').hide()
  $('#after-log').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in failed')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
  $('#response-display').text('Signed out successfully')
  $('#response-display').removeClass()
  $('#response-display').addClass('text-success')
  $('form').trigger('reset')
  $('#after-log').hide()
  $('#before-log').show()
  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#error-message').text('Sign out failed')
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
