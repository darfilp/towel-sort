
// // You should implement your task here.

// module.exports = function towelSort (matrix) {
    
//      for (let i = 0; i < matrix.length; i++) {
//          if (i % 2 === 1) {
//              console.log(matrix[i].reverse())
//          }
//      }
//      matrix = [].concat.apply([], matrix);
//   return matrix;
// }

module.exports = function towelSort (array) {
    sortedArr = [], len = 0;
    if (array == undefined) return [];
	for (let i = 0; i < array.length; i++) {
        len = array[i].length
        for (let j = 0; j < len; j++) {
            if (i % 2 == 0) {
                sortedArr.push(array[i][j]);
            }
            else {
                sortedArr.push(array[i].pop());
            }
        }
    }
    return sortedArr;
}
