//L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let x = prompt ("Inserisci una parola");
console.log ("La parola 1 è " + x)

let y = prompt ("Inserisci un'altra parola");
console.log ("La parola 2 è " + y)

let parolaUno = Number (x.length)

let parolaDue = Number (y.lenght)


if (parolaUno > parolaDue) {
  console.log ("La prima parola è più lunga")
  document.getElementById("risultato").innerHTML = 
  `<div>La parola più lunga è ${parolaUno}</div>`
  `<div>La parola più corta è ${parolaDue}</div>`

} else if (parolaUno < parolaDue) {
  console.log ("La seconda parola è più lunga")
  document.getElementById("risultato").innerHTML = 
  `<div>La parola più lunga è ${parolaDue}</div>`
  `<div>La parola più corta è ${parolaUno}</div>`

}else {
  console.log ("Le parola sono ugualmente lunghe")
  document.getElementById("risultato").innerHTML = 
  `<div>Le parole sono ugualmente lunghe</div>`
}