//hier kommt die Logik für unsere Color-palette
import colors from "./color.js";

function viewColor() {
  //die var colorRequest soll mit dem Wert von inputfield gefüllt werden
  var colorRequest = document.getElementById("inputfield").value.toLowerCase();

  //finde container element
  const cardContainer = document.querySelector(".bodyContainer");

  //lösche vorherige inhalte
  cardContainer.innerHTML = "";


  //wenn eingabefeld leer, zeige alle farbkarten
  if (colorRequest.trim() === "") {
    colors.forEach((color) => { //für jede farbe in der farbliste
      var newColorCard = document.createElement("div");
      newColorCard.classList.add("card");
      cardContainer.appendChild(newColorCard); // Füge newColorCard zur bodyContainer hinzu

      var newColorProfilCard = document.createElement("div");
      newColorProfilCard.classList.add("profil-card");
      newColorProfilCard.style.backgroundColor = color.hex;
      newColorCard.appendChild(newColorProfilCard); // Füge newColorProfilCard zur newColorCard hinzu

      var newColorCardDescription = document.createElement("div");
      newColorCardDescription.classList.add("card-description");
      newColorCardDescription.innerText = color.name;
      newColorCard.appendChild(newColorCardDescription); // Füge newColorProfilCard zur newColorCard hinzu
    });
  } else { //wenn eingabefeld nicht leer...
    colors.forEach((color) => {
      //und ein farbname eingegeben wurde zeige nur diese Farbkarte
      if (color.name.toLowerCase() === colorRequest) { // colorRequest ist der Wert aus dem Inputfeld
        var newColorCard = document.createElement("div");
        newColorCard.classList.add("card");
        cardContainer.appendChild(newColorCard); // Füge newColorCard zur bodyContainer hinzu

        var newColorProfilCard = document.createElement("div");
        newColorProfilCard.classList.add("profil-card");
        newColorProfilCard.style.backgroundColor = color.hex;
        newColorCard.appendChild(newColorProfilCard); // Füge newColorProfilCard zur newColorCard hinzu

        var newColorCardDescription = document.createElement("div");
        newColorCardDescription.classList.add("card-description");
        newColorCardDescription.innerText = color.name;
        newColorCard.appendChild(newColorCardDescription); // Füge newColorProfilCard zur newColorCard hinzu
      }
    });
  }
}

//sobald der DOM gelanden wurde,
document.addEventListener("DOMContentLoaded", function () {
  viewColor(); //view Funktion wird aufgerufen, um zu Beginn alle Farben anzuzeigen
  document.getElementById("colorbutton").addEventListener("click", viewColor); //wenn der Button geklickt wird, wird die view Funktion aufgerufen
  // console log als Test
  console.log("DOM LOADED");
});

