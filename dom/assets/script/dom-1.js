'use strict';
//topic DOM


//for(const prop in document) {
//    console.log(`${prop}: ${document[prop]`});
//}

//the getElementById() method
const section = document.getElementById('section');
console.log(section);
console.log();


console.log('Parent node (HTML document)');
console.log(section.parentNode);
console.log();


console.log('Child node (HTML document)');
console.log(section.childNodes);
console.log();

//console.log('The html code within section');
//console.log(section.innerHTML);
//console.log();


//console.log('The text (content) within section');
//console.log(section.innerText);
//console.log();

let str = ''; 
if (section.hasChildNodes) {
    const children =section.childNodes;

    children.forEach((child, index) => {
        if (!child.nodeName.includes('text')) 
        str += `Child node ${index}: ${child.nodeName}\n`;
    });
}

// #text is the whitespace/line break between the actual HTML nodes
console.log(str);