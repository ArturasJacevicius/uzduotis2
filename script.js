let favoriteCities = ["Vilnius", "Kaunas", "Klaipeda"];

let favoriteCitiesUpper = favoriteCities.map((element) => {
  return element.toUpperCase();
}); // cia pasidariau uppercase identiska lista su kuriuo veliau tikrinsiu user input values.

const main = document.querySelector("main");

const favoriteCitiesList = document.createElement("ul");
main.append(favoriteCitiesList);

const form = document.createElement("form");
main.append(form);
form.append(document.createElement("input"));

favoriteCities.forEach((cityName) => {
  const favoriteCitiesListItem = document.createElement("li");
  favoriteCitiesListItem.textContent = cityName;
  favoriteCitiesList.append(favoriteCitiesListItem);
}); // cia praeina per pradini miestu sarasa ir sukuria is ju list'a.

document.forms[0].addEventListener("submit", addCityToList);

const message = document.createElement("h2"); //susikuriau kintamaji i kurio vidu veliau rasysiu zinute jei bus bandoma ivesti miesta jau esantis sarase

function addCityToList(event) {
  event.preventDefault();
  message.remove(); //sitas tiesiog paremovina pasikartojancio miesto zinute jei tokia yra is anksciau. Be sitos eilutes zinute nedingsta po pirmo atsiradimo ir vis dauginasi jei ir toliau bandomas ivesti pasikartojantis miestas.
  const inputElement = document.querySelector("input");
  for (let i = 0; i < favoriteCities.length; i++) {
    if (favoriteCitiesUpper.includes(inputElement.value.toUpperCase())) {
      message.textContent = "The city is already in the list 📃";
      main.append(message);
      break;
    } else if (inputElement.value === "") {
      alert("Please enter city name 🏙"); //cia aisku galima buvo ir per ta pacia pasikartojancio miesto zinute suzaist tik su kitu tekstu, bet oh well...
      break;
    } else {
      //na o cia kai naujai vedamas miestas praeina auksciau esancius checkus, tai pasiupdatina mano abu, kodo pradzioj, esantys array, bei sukuriamas naujas list item su svieziai ivestu miestu kuri as paimu is ka tik updatinto array kaip paskutini array item'a. Dar paclearinu input fielda pabaigoj
      favoriteCities.push(inputElement.value);
      favoriteCitiesUpper = favoriteCities.map((element) => {
        return element.toUpperCase();
      });
      const favoriteCitiesListItem = document.createElement("li");
      favoriteCitiesListItem.textContent =
        favoriteCities[favoriteCities.length - 1];
      favoriteCitiesList.append(favoriteCitiesListItem);
      document.querySelector("input").value = "";
      break;
    }
  }
}
