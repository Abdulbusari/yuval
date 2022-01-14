//Javascript basics
//topic: interaction

const purple = document.getElementById('one');
const green = document.getElementById('two');
const orange = document.getElementById('three');

console.log(purple);
console.log(green);
console.log(orange);

function toPurple() {
    purple.style.color = '#b84eff'
}

green.onclick = function(){
    this.style.color = '#0f9';
}

orange.addEventListener('click', function(){
    this.style.color = '#f90';
})