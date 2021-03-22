'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onRunCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.createRunSuccess)
    .catch(ui.onError)
}

const onDestroyRun = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.destroy(data)
      .then(ui.onDeleteSuccess)
      .catch(ui.onError)
  }
  
  const onUpdateRun = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
  }
  
  module.exports = {
    onRunCreate,
    onDestroyRun,
    onUpdateRun
  }
  