const NumberInput = parseInt(prompt("inserisci un numero", "10"));
// if (operatore ternario)
NumberInput % 2 == 0
  ? alert("Il numero " + NumberInput + " è pari") // condizione vera
  : alert(
      // condizione falsa
      "Il numero " +
        NumberInput +
        " è dispari quindi ti tocca selezionare il: " +
        (NumberInput + 1)
    );
