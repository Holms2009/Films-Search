'use strict'

const token = 'A0MN5MW-D2WMV7F-GDWHJG6-ZBCA14Y';
const searchButton = document.querySelector('.page-main__search-button');
const searchField = document.querySelector('.page-main__search-field');
const {log} = console;

searchButton.addEventListener('click', async function(evt) {
    evt.preventDefault();
    let response = await fetch('https://api.kinopoisk.dev/movie?field=name&search=' + searchField.textContent + '&isStrict=false&token=' + token);
    let json = response.json();
    log(json);
})