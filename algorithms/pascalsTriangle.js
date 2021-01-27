/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * Input: 5
 *  Output:
 [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */


 // Approach, use the last row to calculate the next row (Dynamic programming)

 var generate = function(numRows) {
     var res = [];
     if(numRows === 0) return res;
     res.push([1]);

     for(let i = 1; i < numRows; i++) {
         let newRow = [];
         var prevRow = res[i - 1];
         // beginning starts with 1
         newRow.push(1);
        // calculate values in the previous row and insert into newRow to be pushed into res array
        for(let i = 0; i < prevRow.length - 1; i++) {
            let total = prevRow[i] + prevRow[i + 1];
            newRow.push(total);
        }
         // end ends with 1
         newRow.push(1);
         res.push(newRow);
     }
     return res;
 }

 console.log(generate(8));