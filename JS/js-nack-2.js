// Dichiaro un Array Name;
const Name = [
  "Abaco",
  "Attila",
  "Albero",
  "Alessia",
  "Tiziano",
  "Francesco",
  "Eugenio",
];

// Dichiaro un Array SurName;
const SurName = [
  "Agostini",
  "Amato",
  "Brambilla",
  "Bruno",
  "Calabrese",
  "Cavallo",
  "Colombo",
];

// prendi il pulsante
const PrintButton = document.getElementById("print");

PrintButton.addEventListener("click", function () {
  // Scegli randomicamente 1 numero tra 0 e (max Array Name);
  const NumberName = Math.floor(Math.random() * Name.length) + 1;
  //   console.log(NumberName);

  // Scegli randomicamente 1 numero tra 0 e (max Array SurName);
  const NumberSurName = Math.floor(Math.random() * SurName.length) + 1;
  //   console.log(NumberSurName);

  // prendi il Nome e Cognome che come indice equivale al numero random e stampalo;
  console.log(Name[NumberName] + " " + SurName[NumberSurName]);
});
