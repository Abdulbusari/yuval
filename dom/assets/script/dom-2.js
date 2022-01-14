'use strict';

const heading = document.getElementById('heading');
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.innerText);

//change the text 
heading.innerText = 'The Document object model';

//adding the html format
heading.innerHTML = 'The <u>Blah Blah</u>';
