'use strict';

/**
 * Dependencies.
 */

var metaphone = require('wooorm/metaphone@0.1.4');

/**
 * DOM elements.
 */

var $input = document.getElementsByTagName('input')[0];
var $output = document.getElementsByTagName('output')[0];

/**
 * Event handlers.
 */

function oninputchange() {
    $output.textContent = metaphone($input.value);
  }

/**
 * Listen.
 */

$input.addEventListener('input', oninputchange);

/**
 * Initial answer.
 */

oninputchange();