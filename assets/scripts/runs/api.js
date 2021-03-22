'use strict'

const store = require('./../store')
const config = require('./../config')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (data) {
    return $.ajax({
      url: config.apiUrl + '/runs/' + data.run.id,
      method: 'DELETE',
      data: data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }
  
const update = function (data) {
    return $.ajax({
      url: config.apiUrl + '/runs/' + data.run.id,
      method: 'PATCH',
      data: data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }
  
  module.exports = {
    create,
    destroy,
    update
  }