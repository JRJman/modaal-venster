// variable die alle van de modale vensters heeft
const all = document.querySelectorAll('.all');

// alle modaal content verwijderen uit de DOM
for(let i=0; i<all.length; i++){
  let modaalNode = all[i];
  modaalNode.parentNode.removeChild(modaalNode);
}

// nodelist van alle modale knoppen, die inhoud oeten oproepen
const knoppen = document.querySelectorAll('.knop');
const knoppenArrey = [];

// toekomstige node-elementen aanmaken in variablen
let achtergrond         = document.createElement("div");
achtergrond.className   = "achtergrond";
let create              = document.createElement("div");
create.className        = "create";
let kruisje             = document.createElement('button');
kruisje.className       = "kruisje";
kruisje.innerHTML       = '&#x00D7;';

// modale content aan DOM toevoegen
const inhoudToe = (event) => {
  const bijHouden = knoppenArrey.indexOf(event.target);
  console.log(bijHouden);
  create.appendChild(kruisje);
  create.appendChild(all[bijHouden]);
  achtergrond.appendChild(create);
  document.body.appendChild(achtergrond);
}

// sluit het modale venster
const sluiten = () => {
  create.innerHTML = "";
  achtergrond.innerHTML = "";
  document.body.removeChild(achtergrond);
}

// sluitknop event sluiten geven
kruisje.addEventListener('click', sluiten);

// achtergrond sluiten geven
achtergrond.addEventListener('click', sluiten);
// zorgt ervoor dat als je op de modaal klikt het niet sluit
create.addEventListener('click', stop);

// alle modaalknoppen in een array plaatsen eventlistenner koppelen
for (let i=0; i<knoppen.length; i++) {
  // toevoegen aan de array
  knoppenArrey.push(knoppen[i]);
  // klik-event toevoegen
  knoppen[i].addEventListener('click', inhoudToe);
}

function stop(event){
  event.stopPropagation();
}
