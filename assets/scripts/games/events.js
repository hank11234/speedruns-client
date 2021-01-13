'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onGameCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onShowGames = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onGetGame = function (event) {
  event.preventDefault()

  const gameData = getFormFields(event.target)
  api.show(gameData)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onDestroyGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.destroy(gameData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.update(gameData)
  .then(ui.onUpdateSuccess)
  .catch(ui.onError)
}

module.exports = {
  onGameCreate,
  onShowGames,
  onGetGame,
  onDestroyGame,
  onUpdateGame
}
