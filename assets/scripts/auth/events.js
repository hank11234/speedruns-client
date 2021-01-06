'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
    // Prevent page from reloading
    event.preventDefault()
  
    // Get data from form
    // Pass the form DOM object to 'getFormFields':
    // use event.target as the form
    const form = event.target
  
    const data = getFormFields(form)
  
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }

const onSignIn = function (event) {
    event.preventDefault()

    const form = event.target

    const data = getFormFields(form)

    api.signIn(data)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
  
    const form = event.target
  
    const data = getFormFields(form)
  
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
  
const onLogout = function (event) {
    event.preventDefault()

    api.logout()
        .then(ui.logoutSuccess)
        .catch(ui.logoutFailure)
}
  
  module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onLogout
  }
  