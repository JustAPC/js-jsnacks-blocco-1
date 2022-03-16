let somma = 0;

for (i=0; i<10; i++) {
    let num = parseInt (prompt("Inserisci un numero"));
    somma += num;
}

document.getElementById("risultato").innerHTML = `La somma dei numeri è ${somma}`
