const snail = function(array) {
    let stepCount = array.length**2;
    
    const directionsArr = [[0,1],[1,0],[0,-1],[-1,0]];
    let direction = directionsArr[0];
    let changeDirection = 0;
    let row = 0;
    let column = 0;
    const snailList = [];
    
    for(let i = 0; i < stepCount; i++){
        if((row + direction[0] < 0 || row + direction[0] > array.length-1) ||
         (column + direction[1] < 0 || column + direction[1] > array.length-1) ||
         (array[row+direction[0]][column+direction[1]] === 'x')){
          changeDirection += 1;
          direction = directionsArr[changeDirection%4];
        }
        
        if (array[row][column]) snailList.push(array[row][column]);
        array[row][column] = 'x';
        row += direction[0];
        column += direction[1];

    }

    return snailList;
  }

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));

// BEST PRACTICES 
snail1 = function(array) {
  var result;
  // while there is still length to the array
  while (array.length) {
    // Steal the first row.
    // if results exists, then concatate array.shift() if it doesn't, just set it equal to the first row and remove the row from the array
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    // iterate through the remaining lists and pop(get the last item of each) into the results array
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    // array.pop is going to give use the bottom most row. we need to reserve it in order to get it how we want it. This is pretty clever use of the pop() method

    // if there is no more entries in array, then just append an empty list
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    // for the remaining array amounts (except the very first one) work backwards (starting from the farthest most array) and get the first element
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}