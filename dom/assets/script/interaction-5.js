//Javascript basics
//topic: interaction

const section = document.querySelector('section');
const button = document.querySelector('button');

// creating a '<p>'
function newParagraph(){
const newElement = document.createElement('p');
const content = document.createTextNode('Hey, I am a new paragraph. coooollll!');
newElement.appendChild(content);
section.append(newElement);
}


button.addEventListener('click', newParagraph);