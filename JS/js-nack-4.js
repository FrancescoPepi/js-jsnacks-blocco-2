// Dichiaro un Array InsiemeUno (5 elemnti)
let InsiemeUno = [2, 4, 7, 3, 8];

// Dichiaro un Array InsiemeDue (7 elementi)
let InsiemeDue = [5, 7, 2, 98, 1, 53, 24];

let InsiemeGrande;

if (InsiemeUno.length > InsiemeDue.length) {
  InsiemeGrande = InsiemeUno;
} else {
  InsiemeGrande = InsiemeDue;
}

console.log(InsiemeGrande);

for (let i = 0; i < InsiemeGrande.length; i++) {
  const NumberRandom = Math.floor(Math.random() * 100) + 1;
  console.log(NumberRandom + "random nummero");

  if (InsiemeUno.length == InsiemeDue.length) {
    break;
  } else if (InsiemeUno.length > InsiemeDue.length) {
    InsiemeDue.push(NumberRandom);
    console.log(NumberRandom + "random nummero aggiunto 1");
  } else if (InsiemeUno.length < InsiemeDue.length) {
    InsiemeUno.push(NumberRandom);
    console.log(NumberRandom + "random nummero aggiunto 2");
  }
}
console.log(InsiemeDue);
console.log(InsiemeUno);
