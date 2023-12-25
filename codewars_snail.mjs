const snail = function(array) {
    let stepCount = array.length**2;
    
    // set initial direction
    const directionsArr = [[1,0],[0,-1],[-1,0],[0,1]]
    let direction = directionsArr[0]
    let changeDirection = 0;
    let x = 0;
    let y = 0;
    // iterate through all values
    for(let i = 0; i < stepCount; i++){
        console.log(array[x][y])
        x += []
        // im here right now. this problem is really fun

    }

    console.log(stepCount)
  }

snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);