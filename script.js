/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

for (let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }


}

// function firstTask() {
//     // Пишем решение вот тут
//     let i = 5;
//     while (i< 10){
//     console.log (i);
//     i++;
// }
// }

function firstTask (){
    for(let i = 5; i < 11; i++) {
        console.log(i);
    }
}


function secondTask() {

    for (i = 20; i > 9; i--) {
        console.log(i);
    }
}
 

function thirdTask() {
    for(let i = 2; i < 12; i +=2) {
        console.log(i);
     }  
}


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// Что за function такой мы узнаем совсем скоро :) Это нужно для автоматических тестов
// Пока нас интересуют циклы и условия

function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

firstTask()

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i)
    }
}

secondTask()

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

thirdTask()

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask()

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);