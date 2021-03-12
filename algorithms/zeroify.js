// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column is set to 0


function zeroify(matrix){
    // outer
  var index = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(!matrix[i][j]) {
        index.push([i,j]);
      }
    }
	}

  for(let i = 0; i < index.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      // index[i][0]
      // row
      matrix[index[i][0]][j] = 0;
    }
  } 

  for(let i = 0; i < index.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      matrix[j][index[i][1]] = 0;
    }
  }

  // console.log(matrix);
	return matrix
}


// Time Complexity: O(n * m)
// Space Complexity: O(n)