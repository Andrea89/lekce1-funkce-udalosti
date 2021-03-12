// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}


//------------------------mé řešení-------------------------------------------------

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");

  let prepisCtverecek = document.getElementsByClassName('ctverecek')[0];
  prepisCtverecek.innerHTML = 'Gratulace, právě jsi spustila tuto funkci!';
  prepisCtverecek.style.width = '600px';
}

//změna barvy čtverečku
function zmenBarvu() {
  document.querySelector('.ctverecek').style.backgroundColor = '#006400';
}

//zobraz výsledek až po zmáčknutí tlačítka
function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}



