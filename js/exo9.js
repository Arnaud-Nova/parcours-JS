/* === Exo9 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la somme des nombres contenus dans cet Array.
 *
 * Par exemple :
 * - [1, 2, 3] : 6
 * - ['un', 2, 'trois', 4, 'cinq'] : 6
 * - [] : 0
 * - [1, [2, 3, [4, 5], 6], 7, [8, 9]] : 45
 */


function sum(arr) {
  var result = 0;
  for (var index in arr) {
    if (arr[index].length > 1) {
      for (var index2 in arr[index]) {
        if (arr[index][index2].length > 1) {
          for (var index3 in arr[index][index2]) {
            if (Number.isInteger(arr[index][index2][index3])) {
              result = result + arr[index][index2][index3];
            }
          }
        }
        if (Number.isInteger(arr[index][index2])) {
          result = result + arr[index][index2];
        }
      }
    }
    if (Number.isInteger(arr[index])) {
      result = result + arr[index];
    }
  }
  return result;
}



// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
