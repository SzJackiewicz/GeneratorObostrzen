

const las = "lasy zostają zamknięte na dwa tygodnie";
const galerie = "galerie zostają zamknięte przynajmniej do końca miesiąca";
const maseczki = "wymóg noszenia maseczek na dworze";
const fryzjerzy = "zakłady fryzjerskie nadal pozostają zamknięte";
const sport = "obiekty sportowe za wyjątkiem tych na świeżych powietrzu pozostają zamknięte";
const silka = "o siłowniach nikt już nie pamięta";
const restauracje = "w restauracjach tylko ogródki";
const kina = "w kinach tylko filmy polskie";
const szkoly = "nauka hybrydowa przynajmniej do 2023";
const zgromadzenia = "zakaz zgromadzeń powyżej 1 osoby";
const church = "kościoły strefą wolną od covid";
const wybory = "wybory zależne od tego kto prowadzi w sondażach";
const granice = "granice otwarte tylko w jedną stronę i tylko dla wyborców opozycji";

const arrayList = [
  las,
  galerie,
  maseczki,
  fryzjerzy,
  sport,
  silka,
  restauracje,
  kina,
  szkoly,
  zgromadzenia,
  church,
  wybory
];

const input = document.getElementById("fnumber");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
// let inputValue = input.value;

function getRandom() {
  if (input.value > 5000) {
    let random = Math.floor(Math.random() * arrayList.length);
    return arrayList.splice(random, 1);
  } else {
    return "za mało zakażeń";
  }
}
//niech pod random będzie liczba, która będzie indeksem tablicy i wtedy return zwróci tablicę o konkretnym indeksie

function addNewRest() {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = getRandom();
  taskDiv.classList.add("rest");
  list.appendChild(taskDiv);
  // list to nazwa klasy w której są obostrzenia. klasa to div class='list'
}


btn.addEventListener('click', addNewRest);