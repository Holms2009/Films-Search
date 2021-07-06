'use strict'

const token = 'A0MN5MW-D2WMV7F-GDWHJG6-ZBCA14Y';
const filmsButton = document.querySelector('.films-btn');
const personsButton = document.querySelector('.persons-btn');
const searchHeader = document.querySelector('.page-main__header');
const searchButton = document.querySelector('.page-main__search-button');
let results = document.querySelector('.page-main__results');
let searchType = 'movie';
let searchField = document.querySelector('.page-main__search-field');
let films;
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
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }

    let request = 'https://api.kinopoisk.dev/' + searchType + '?field=name&search=' + searchField.value;
    let response = await fetch(request + `&isStrict=false&token=${token}`);
    response.json().then(result => {
        films = result.docs.map(item => item);
    }).then(() => addCards(films)).catch(log);
})

function addCards(films) {
    log(films);
    const cardTemplate = document.querySelector('.page-main__card-template').content.querySelector('.page-main__card');
    films.forEach(film => {
        let card = cardTemplate.cloneNode(true),
            img = card.querySelector('.page-main__poster'),
            title = card.querySelector('.page-main__title'),
            id = card.querySelector('.page-main__kp-id'),
            description = card.querySelector('.page-main__description'),
            year = card.querySelector('.page-main__release-year');
        
        img.src = film.poster.url;
        title.innerHTML = film.name;
        id.innerHTML = 'ID: ' + film.id;
        description.innerHTML = film.description;
        year.innerHTML = 'Год выпуска: ' + film.year;
        results.append(card);
    });
}