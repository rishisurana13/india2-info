'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const config = require('./config')
const store = require('./store')



// use require without a reference to ensure a file is bundled
// require('./example')


$(() => {

$('#problem-text').hide()
$('#our-solution-text').hide()
$('#solution-courses').hide()
$('#mission-1').hide()
$('#mission-2').hide()
$('#mission-3').hide()

$('#details-problem').on('click', function () {
  $('#problem-text').toggle()

})
$('#details-solution').on('click', function () {
  $('#our-solution-text').toggle()
  $('#solution-courses').toggle()

})

$('#details-mission').on('click', function () {
  $('#mission-1').toggle()
  $('#mission-2').toggle()
  $('#mission-3').toggle()


})

  })
