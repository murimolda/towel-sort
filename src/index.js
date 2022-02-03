
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix === undefined) {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
}
