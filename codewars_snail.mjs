const snail = function(array) {
    let stepCount = array.length**2;
    
    // set initial direction
    // const directionsArr = [[1,0],[0,-1],[-1,0],[0,1]]
    const directionsArr = [[0,1],[1,0],[0,-1],[-1,0]]
    let direction = directionsArr[0]
    let changeDirection = 0;
    let row = 0;
    let column = 0;
    const snailList = []
    
    for(let i = 0; i < stepCount; i++){
        console.log(`array[row][column]: ${array[row][column]}`);
        if((row + direction[0] < 0 || row + direction[0] > array.length-1) ||
         (column + direction[1] < 0 || column + direction[1] > array.length-1) ||
         (array[row+direction[0]][column+direction[1]] === 'x')){
          changeDirection += 1;
          direction = directionsArr[changeDirection%4];
          console.log(direction);
        }
        
        snailList.push(array[row][column]);
        array[row][column] = 'x';
        row += direction[0];
        column += direction[1];

    }

    console.log(array);
    console.log(snailList);
  }

snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);