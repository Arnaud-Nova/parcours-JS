/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */
function clock() {
  var now = new Date();
  var hours = twoNumbers(now.getHours());
  var minutes = twoNumbers(now.getMinutes());
  var seconds = twoNumbers(now.getSeconds());
  var div = document.querySelector('#container');
  div.textContent = hours + 'h ' + minutes + 'm ' + seconds + 's';
  setTimeout(clock, 1000);
}

function twoNumbers(val) {
  if (parseInt(val) < 10) {
    val = '0' + val;
  }
  return val;
}


clock();