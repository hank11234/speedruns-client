'use strict'

const createGameSuccess = function (response) {

  $('#message').text('New Game added!')

  const gameHtml = `
  <h3>${response.game.title}</h3>
  <p>Release Date: ${response.game.releaseDate}</p>
  <p>Genre: ${response.game.genre}</p>
  <p>Platform: ${response.game.platform}</p>
  <p>ID: ${response.game._id}</p>
  `

  $('#game-display').html(gameHtml)
  $('form').trigger('reset')
}

const createGameFailure = function (error) {
  $('#message').text('Game create failed: ' + error.responseJSON.message)
}

const onIndexSuccess = function (response) {
  $('#message').text('')
  // gives object of all games
  // make constant for this array
  const games = response.games
  console.log(games);
  // new empty array
  let gamesHTML = ''
  // for each movie in array games, generate HTML and put that HTML in the DOM
  games.forEach(function (currentGame) {
    const currentGameHTML = `
    <h4>${currentGame.title}</h4>
    <p>Release Date: ${currentGame.releaseDate}</p>
    <p>Genre: ${currentGame.genre}</p>
    <p>Platform: ${currentGame.platform}</p>
    <p>Speedruns: ${currentGame.runs.length}</p>
    <p>ID: ${currentGame._id}</p>
    `
    gamesHTML += currentGameHTML
  })
  if (!gamesHTML) {
    $('#game-display').text('You have no Games.')
  } else {
    $('#game-display').html(gamesHTML)
  }
}

const onShowSuccess = function (gameData) {
  $('#message').text('') 
  const runs = gameData.game.runs
  runs.sort((a, b) => (a.time > b.time) ? 1 : -1)
  let runsHTML= ''
  runs.forEach(function (currentRun) {
    const currentRunHTML = `
    <p>Time: ${currentRun.time}</p>
    <p>Date: ${currentRun.date}</p>
    <p>Goal: ${currentRun.goal}</p>
    <p>Run ID: ${currentRun._id}</p>
    `
    runsHTML += currentRunHTML
  })
  const gameHTML = `
    <h4>${gameData.game.title}</h4>
    <p>Release Date: ${gameData.game.releaseDate}</p>
    <p>Genre: ${gameData.game.genre}</p>
    <p>Platform: ${gameData.game.platform}</p>
    <p>Speedruns: ${runsHTML}</p>
    <p>Game ID: ${gameData.game._id}</p>
    `
  $('#game-display').html(gameHTML)
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
  $('#message').text('Delete successful!')
  $('#game-display').text('')
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('Game successfully updated!')
  $('#game-display').text('')
  $('form').trigger('reset')
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  createGameSuccess,
  createGameFailure,
  onIndexSuccess,
  onShowSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onError
}
