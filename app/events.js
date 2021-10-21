'use strict'

// const getFormFields = require('../../lib/get-form-fields')
// // const api = require('.')

// const onSignUp = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.signUp(formData)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }

const x = 'x'
const o = 'circle'
const winCons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
]

// module.exports = {
//   onSignUp,
//   onSignIn,
//   onChangePassword,
//   onSignOut
// }
