//Javascript basics
//topic: interaction

const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', function(){
    const message = input.value.trim();
    alert(`The message is\n${message}`);
});
