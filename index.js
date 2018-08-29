'use strict'

var metaphone = require('metaphone')

var $input = document.getElementsByTagName('input')[0]
var $output = document.getElementsByTagName('output')[0]

$input.addEventListener('input', oninputchange)

oninputchange()

function oninputchange() {
  $output.textContent = metaphone($input.value)
}
