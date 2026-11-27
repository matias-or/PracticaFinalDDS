// EJERCICIO 1

function anoBisiesto(ano) {
  if (ano % 4 === 0 || (ano % 400 === 0 && ano % 100 !== 0)) {
    console.log("el año " + ano + " es bisiesto");
  } else {
    console.log("el año " + ano + " no es bisiesto");
  }
}


