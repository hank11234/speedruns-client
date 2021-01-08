'use strict'

const createGameSuccess = function (response) {

  $('#message').text('Game Created!')

  const gameHtml = `
  <h3>${response.game.title}</h3>
  <h4>Release Date: ${response.game.releaseDate}</h4>
  <h4>Genre: ${response.game.genre}</h4>
  <h4>Platform: ${response.game.platform}</h4>
`

  $('.game-display').html(gameHtml)
}

const createGameFailure = function (error) {
  $('#message').text('Game create failed: ' + error.responseJSON.message)
}

const onIndexSuccess = function (response) {
  console.log(response);
  // gives object of all games
  // make constant for this array
  const games = response.games
  // new empty array
  let gmaesHTML = ''
  // for each movie in array games, generate HTML and put that HTML in the DOM
  games.forEach(function (currentGame) {
    const currentGameHTML = (`
      <div>
        <h4>Title: ${currentGame.title}</h4>
        <p>Release Date: ${currentGame.releaseDate}</p>
        <p>Genre: ${currentGame.genre}</p>
        <p>Platform: ${currentGame.platform}</p>
        <p>ID: ${currentGame._id}</p>
      `)
      gamesHTML += currentGameHTML
  })
  $('#game-display').html(gamesHTML)
}

const onShowSuccess = function (gameData) {
  let gameHTML = (`
    <div>
      <h4>Title: ${gameData.game.title}</h4>
      <p>Release Date: ${gameData.game.releaseDate}</p>
      <p>Genre: ${gameData.game.genre}</p>
      <p>Platform: ${gameData.game.platform}</p>
      <p>ID: ${gameData.game._id}</p>
    `)
  $('#game-display').html(gameHTML)
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
  $('#game-display').text('Delete successful!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (movieData) {
  $('#game-display').text('Movie successfully updated')
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
