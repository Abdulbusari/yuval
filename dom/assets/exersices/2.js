//Javascript basics
//topic: interaction

const purple = document.getElementById('one');
const grow = document.getElementById('two');

console.log(purple);
console.log(grow);

function toPurple() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    purple.style.backgroundColor = '#' + randomColor;
}
grow.onclick = function(){
    this.style.fontSize = '30px';
}

