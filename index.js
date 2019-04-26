'use strict';

function inputListen() {
  $('#doggieForm').on('submit', function(event) {
    $('.dogResults').empty();
    event.preventDefault();
    let dogInput = $('#inputNumber').val();
    getInput(dogInput);
  });
}

function getInput(dogInput) {
    if (dogInput.length === 0) {
      let userInput = 3;
      pullDogImages(userInput);
    } else if (dogInput > 50) {
      alert('Too many dogs!!! Pick a number between 1 and 50!');
    } else if (dogInput < 1 ) {
      alert('Not enough dogs! At least pick 1!');
    } else {
      let userInput = dogInput;
      pullDogImages(userInput);
    } 
  }

function pullDogImages(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => showDogs(responseJson))
    .catch(error => alert('Something went wrong'));
}

function showDogs(dogPictures) {
    console.log(dogPictures);
    for (var i = 0; i < dogPictures.message.length; i++) {
      $('.dogResults').append(`<img src="${dogPictures.message[i]}">`);
    };
}

$(function() {
  console.log('App loaded! Waiting for submit!');
});

inputListen()

