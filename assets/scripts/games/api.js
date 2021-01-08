'use strict'

const store = require('./../store')
const config = require('./../config')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    // data: data
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameData.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameData.game.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameData.game.id,
    method: 'PATCH',
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
