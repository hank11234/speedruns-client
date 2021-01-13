'use strict'

const createRunSuccess = function (response) {
  const currentRun = (response.game.runs.length - 1)
  $('#message').text('New Run added!')

  const runHtml = `
  <p>Length: ${response.game.runs[currentRun].time}</p>
  <p>Date: ${response.game.runs[currentRun].date}</p>
  <p>Goal: ${response.game.runs[currentRun].goal}</p>
  <p>ID: ${response.game.runs[currentRun]._id}</p>
  `

  $('#game-display').html(runHtml)
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
    $('#message').text('Delete successful!')
    $('#game-display').text('')
    $('form').trigger('reset')
  }
  
  const onUpdateSuccess = function () {
    $('#message').text('Run successfully updated!')
    $('#game-display').text('')
    $('form').trigger('reset')
  }
  
  const onError = function (error) {
    $('#message').text('Error: ' + error.responseJSON.message)
  }
  
  
  module.exports = {
    createRunSuccess,
    onDeleteSuccess,
    onUpdateSuccess,
    onError
  }