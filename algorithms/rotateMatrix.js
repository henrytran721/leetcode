// Given an N X M matrix where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. 

function rotateMatrix(m) {
    let len = m.length;
    for(let i = 0; i < len; i++) {
      for(let j = i; j < len; j++) {
        // center diagonal will stay the same, swap numbers in upper right and bottom left quadrants
        let temp = m[i][j];
        m[i][j] = m[j][i];
        m[j][i] = temp;
      }
    }
  
  
    for(let i = 0; i < m.length; i++) {
      for(let j = 0; j < m.length / 2; j++) {
        let temp = m[i][j];
        m[i][j] = m[i][len - j - 1];
        m[i][len - j - 1] = temp;
      }
    }
  
    return m;
  }
  
  console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))
  
  // Time O(n^2)
  // Space O(1)
  
  /**
   * 1 2 3          7 4 1  (rotated)
   * 4 5 6 -->      8 5 2
   * 7 8 9          9 6 3
   * 
   * 1 4 7
   * 2 5 8
   * 3 6 9 
   */