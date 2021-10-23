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

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
