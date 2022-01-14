//topic: DOM 


/*
  The querySelector() method  returns the  first element within the document
  that matches th specific selector, or group of selectors. If no matches
  are found, null is returned
*/

//by element
const section = document.querySelector('section');
//console.log(section.parentNode);
//console.log(section.childNodes);

// by id
const heading = document.querySelector('#heading');
console.log(heading);

//by class
const myHeading = document.querySelector('.my-heading');
console.log(myHeading);

// getElementByTagName(): returns a collection of nodes(HTMLCollection)
const sectionByTag = document.getElementsByClassName('heading');
console.log(sectionByTag);

// getElementByClassName(): returns a collection of nodes (HTMLCollection)
const sectionByClass = document.getElementsByClassName('my-heading');
console.log(sectionByClass);
