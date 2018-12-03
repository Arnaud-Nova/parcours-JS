/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */

function getLongestString(arr) {
  var longest = 0;
  for (var str in arr) {
    if (arr[str].length > longest) {
      var longestWord = arr[str];
      longest = arr[str].length;
    }
  }
  if (longestWord !== undefined) {
    return longestWord;
  } else {
    return false;
  }
}




// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
