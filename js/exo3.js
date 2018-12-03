/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */
var calcul = {
  init: function() {
    var firstNumber = document.querySelector('#input1');
    var secondNumber = document.querySelector('#input2');
    firstNumber.addEventListener('blur', calcul.numberOne);
    secondNumber.addEventListener('blur', calcul.numberTwo);

  },

  numberOne: function(event) {
    calcul.one = event.target.value;
    console.log(calcul.one);
    console.log(calcul.two);
    if (calcul.one !== undefined && calcul.two !== undefined) {
      calcul.result();
    }
  },

  numberTwo: function(event) {
    calcul.two = event.target.value;
    console.log(calcul.one);
    console.log(calcul.two);
    if (calcul.one !== undefined && calcul.two !== undefined) {
      calcul.result();
    }
  },

  result: function() {
    document.querySelector('#result').textContent = '';
    var result = Number(calcul.one) + Number(calcul.two);
    if (Number.isInteger(result)) {
      document.querySelector('#result').textContent = 'Le résultat de la somme est ' + result;
    } else {
      document.querySelector('#result').textContent = 'Il ne faut renseigner que des nombres entiers';
    }
    
  }

};

calcul.init();