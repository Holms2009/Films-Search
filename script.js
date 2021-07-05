'use strict'

const token = 'A0MN5MW-D2WMV7F-GDWHJG6-ZBCA14Y';
const filmsButton = document.querySelector('.films-btn');
const personsButton = document.querySelector('.persons-btn');
const searchHeader = document.querySelector('.page-main__header');
let searchType = 'movie';
const searchButton = document.querySelector('.page-main__search-button');
let searchField = document.querySelector('.page-main__search-field');
const { log } = console;

filmsButton.addEventListener('click', evt => {
    evt.preventDefault();
    if (searchHeader.textContent !== 'Поиск фильмов') {
        searchHeader.style = 'filter: blur(10px); color: #ffffff';
        setTimeout(() => searchHeader.textContent = 'Поиск фильмов', 300);
        setTimeout(() => searchHeader.style = 'filter: blur(0); color: #000000', 350);
        searchField.value = '';
        searchField.placeholder = 'Введите название или часть названия фильма';
        searchType = 'movie';
    } else {
        return;
    }
})

personsButton.addEventListener('click', evt => {
    evt.preventDefault();
    if (searchHeader.textContent !== 'Поиск фктеров') {
        searchHeader.style = 'filter: blur(10px); color: #ffffff';
        setTimeout(() => searchHeader.textContent = 'Поиск актеров', 300);
        setTimeout(() => searchHeader.style = 'filter: blur(0); color: #000000', 350);
        searchField.value = '';
        searchField.placeholder = 'Введите имя актера или режиссера';
        searchType = 'person';
    } else {
        return;
    }
})

searchButton.addEventListener('click', async function (evt) {
    evt.preventDefault();
    let request = 'https://api.kinopoisk.dev/' + searchType + '?field=name&search=' + searchField.value;
    let response = await fetch(request + `&isStrict=false&token=${token}`);
    log(response);
    // let json = response.json().catch(log);
    // log(json);
})