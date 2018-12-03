/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */
var firstNumber = window.prompt('Entrer le premier nombre à additionner :');
var secondNumber = window.prompt('Entrer le second nombre à additionner :');
var result = Number(firstNumber) + Number(secondNumber);
document.querySelector('#result').textContent = 'Le résultat est :' + result;