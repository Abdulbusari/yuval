//topic: DOM 


/*
  The querySelectorAll() method returns the element returns the eleements within the 
  document that matches the specified selector
*/

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

console.log(`This page contains ${paragraphs.length} '<p>' elements`);

const cities = document.getElementById('cities').querySelectorAll('li');
console.log(cities);
console.log(`There are ${cities.length} cities available`);