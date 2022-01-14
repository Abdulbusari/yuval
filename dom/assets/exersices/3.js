//Javascript basics
//topic: interaction

const colour = document.getElementById('one');
const grow = document.getElementById('two');
const reverse = document.getElementById('three');

console.log(colour);
console.log(grow);
console.log(reverse);
console.log(reverse.innerText);

function toColour() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colour.style.color = '#' + randomColor;
};

function toGrow(){
    grow.style.fontSize = '30px';
};


function toReverse(){
    reverse.innerText = 'meroL muspi rolod tis tema, rutetcesnoc gnicsipida tile, des domsuie ropmet tnudidicni tu erolod angam auqila. tu mine da minim mainev,';
    
};


