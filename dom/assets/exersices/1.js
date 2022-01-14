
//class exerecixe 1 filtering
const heroes = document.getElementById('heroes');

const nodes = Object.values(heroes.childNodes);
const cleanNodes = element => element.nodeName != '#text';
const actualNodes = nodes.filter(cleanNodes);
console.log(actualNodes);

//printing the content (text) of each node - the hero name
actualNodes.forEach(element => {
    console.log(element.innerText);
})