//Javascript basics
//topic: interaction

const names = document.getElementById('list').childNodes;

names.forEach(item =>{
    item.addEventListener('click', () => {
        alert(`Hi, my name is ${item.innerText}`);
    });
})