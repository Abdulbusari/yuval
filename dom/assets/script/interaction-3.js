//Javascript basics
//topic: interaction

const purple = document.getElementById('purple');
const green = document.getElementById('green');
const orange = document.getElementById('orange');



purple.addEventListener('click', function(){
    this.classList.toggle('purple');
   

    if (this.classList.contains('purple'))
    this.innerText = 'click to make me black';
    else 
    this.innerText = 'click to make me purple';
});

green.addEventListener('click', function(){
    this.classList.toggle('green');
   

    if (this.classList.contains('green'))
    this.innerText = 'click to make me black';
    else 
    this.innerText = 'click to make me green';
});

orange.addEventListener('click', function(){
    this.classList.toggle('orange');
   

    if (this.classList.contains('orange'))
    this.innerText = 'click to make me black';
    else 
    this.innerText = 'click to make me orange';
});


