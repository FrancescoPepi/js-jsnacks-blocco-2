// Crea un array di numeri interi
const InsiemeNumeri = [3, 4, 5, 32, 65, 23, 10, 11, 56];

// Dichiara NumeriDispari
let NumeriDispari = 0;

// PER OGNI numero
for (let i = 0; i < InsiemeNumeri.length; i++) {
  // SE si trova in posizione dispari
  if (i % 2 != 0) {
    NumeriDispari = NumeriDispari + InsiemeNumeri[i];
  }
  console.log(NumeriDispari);
}

console.log("Il risultato è: " + NumeriDispari);
