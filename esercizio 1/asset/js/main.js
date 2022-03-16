let x = prompt ("Inserisci un numero");

let y = prompt ("Inserisci un numero");

let numero1 = parseInt(x)

let numero2 = parseInt(y)

if (isNaN(numero1 || numero2)) {
  alert ("Inserisci solamente dei numeri,grazie!")
} else {
  if (numero1 > numero2) {
    console.log (`Il numero maggiore è ${numero1}`)
    document.getElementById("risultato").innerHTML = `Il numero maggiore è ${numero1}`
  
  } else if (numero1 < numero2) {
    console.log (`Il numero maggiore è ${numero2}`)
    document.getElementById("risultato").innerHTML = `Il numero maggiore è ${numero2}`
  
  } else {
    console.log (`I numeri sono uguali`)
    document.getElementById ("risultato").innerHTML = `${numero1} e ${numero2} sono uguali`
  }
}
