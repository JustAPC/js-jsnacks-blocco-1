//L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let parolaUno = prompt ("Inserisci una parola");
console.log ("La parola 1 è " + parolaUno)

let parolaDue = prompt ("Inserisci un'altra parola");
console.log ("La parola 2 è " + parolaDue)

let lunghezzaParola1 = Number (parolaUno.length);

let lunghezzaParola2 = Number (parolaDue.length);

if (lunghezzaParola1 > lunghezzaParola2) {
  console.log ("La prima parola è più lunga")
  document.getElementById("risultato").innerHTML = 
  `<div>La parola più corta è ${parolaDue}</div>
  <div>La parola più lunga è ${parolaUno}</div>`

} else if (lunghezzaParola1 < lunghezzaParola2) {
  console.log ("La seconda parola è più lunga")
  document.getElementById("risultato").innerHTML = 
  `<div>La parola più corta è ${parolaUno}</div>
  <div>La parola più lunga è ${parolaDue}</div>`

} else {
  console.log ("Le parola sono ugualmente lunghe")
  document.getElementById("risultato").innerHTML = 
  `<div>Le parole sono ugualmente lunghe</div>`
}