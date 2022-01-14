"use strict";

//Javascript basics
//topic: interaction

const message = document.getElementById('message');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    message.classList = 'is-visible';
})