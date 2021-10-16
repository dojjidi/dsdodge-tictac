// get them form fields
const getFormFields = require('../lib/get-form-fields')
// require api auth functions
const api = require('./api')
// require ui functions to update page
const ui = require('./ui')
// sign up function events
const onSignUp = function (event) {
  // prevents page from refreshing
  event.preventDefault()
  // target 'submit' event
  const form = event.target
  // get data from form
  const formData = getFormFields(form)
  // post sign in request
  api
    .signUp(formData)
    // return singUpSuccess on success
    .then(ui.signUpSuccess)
    // otherwise return error
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)

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
