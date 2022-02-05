
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
     for (let i = 0; i < matrix.length; i++) {
         if (i % 2 === 1) {
             console.log(matrix[i].reverse())
         }
     }
     matrix = [].concat.apply([], matrix);
  return matrix;
}
