/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */
var calcul = {
  init: function() {
    var firstNumber = document.querySelector('#input1');
    var secondNumber = document.querySelector('#input2');
    var sum = document.querySelector('#container > button');
    firstNumber.addEventListener('blur', calcul.numberOne);
    secondNumber.addEventListener('blur', calcul.numberTwo);
    sum.addEventListener('click', calcul.result);

  },

  numberOne: function(event) {
    calcul.one = event.target.value;
  },

  numberTwo: function(event) {
    calcul.two = event.target.value;
  },

  result: function(event) {
    document.querySelector('#result').textContent = '';
    event.preventDefault();
    var result = Number(calcul.one) + Number(calcul.two);
    document.querySelector('#result').textContent = 'Le résultat de la somme est ' + result;
  }

};

calcul.init();