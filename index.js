var metaphone = require('metaphone');
var inputElement = document.getElementsByTagName('input')[0];
var outputElement = document.getElementsByTagName('output')[0];

function getPhonetics() {
    outputElement.textContent = metaphone(inputElement.value);
}

inputElement.addEventListener('input', getPhonetics);

getPhonetics();
