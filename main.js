const input = document.querySelector("#fnumber");
const btn = document.querySelector("button");
const list = document.querySelector(".list");

let inputValue = input.value;
console.log(input);


const las = "lasy zostają zamknięte na dwa tygodnie";
const galerie = "galerie zostają zamknięte przynajmniej do końca miesiąca";
const maseczki = "wymóg noszenia maseczek na dworze";
const fryzjerzy = "zakłady fryzjerskie nadal pozostają zamknięte";
const sport = "obiekty sportowe za wyjątkiem tych na świeżych powietrzu pozostają zamknięte";
const siłka = "o siłowniach nikt już nie pamięta";
const restauracje = "w restauracjach tylko ogródki";
const kina = "w kinach tylko filmy polskie";
const szkoły = "nauka hybrydowa przynajmniej do 2023";
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
  siłka,
  restauracje,
  kina,
  szkoły,
  zgromadzenia,
  church,
  wybory,
];


function getRandom() {
  if (inputValue > 5000) {
    let random = Math.floor(Math.random() * arrayList.length);
    return arrayList[random];
  } else {
    alert("za mało zakażeń");
  }
}
//niech pod random będzie liczba, która będzie indeksem tablicy i wtedy return zwróci tablicę o konkretnym indeksie

function addNewRest(event) {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = getRandom();
  taskDiv.classList.add("rest");
  list.appendChild(taskDiv);
  // list to nazwa klasy w której są obostrzenia. klasa to div class='list'
}

btn.addEventListener("click", addNewRest);
