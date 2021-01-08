'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-login').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#logout').on('submit', authEvents.onLogout)
  $('#game-create').on('submit', gameEvents.onGameCreate)
  $('#games-index').on('submit', gameEvents.onShowGames)
  $('#game-show').on('submit', gameEvents.onGetGame)
  $('#game-destroy').on('submit', gameEvents.onDestroyGame)
  $('#game-update').on('submit', gameEvents.onUpdateGame)
})
