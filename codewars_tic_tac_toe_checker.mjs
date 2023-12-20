function isSolved(board) {
    let zerosPresent = false;
    for(const row of board) {if(row.indexOf(0) !== -1) zerosPresent = true;}

    for(const symbol of [1,2]){
        for(const place of [0,1,2]){
            if(verticalCheck(board,place,symbol)) return symbol;
            if(horizontalCheck(board,place,symbol)) return symbol;
            if(diagonalCheck(board,place,symbol)) return symbol;
        }
    }

    const output = zerosPresent ? -1 : 0;
    return output;
  }


function horizontalCheck(arr, row, symbol){
    for(let i = 0; i < 3; i++){
        if(arr[row][i] !== symbol){
            return false;
        }
    }
    return true;
}
function verticalCheck(arr, column, symbol){
    for(let i = 0; i < 3; i++){
        if(arr[i][column] !== symbol){
            return false;
        }
    }
    return true;
}
function diagonalCheck(arr, startColumn, symbol){
    let dir = startColumn > 0 ? -1 : 1;
    for(let i = 0; i < 3; i++){
        if(arr[0+i][startColumn+(i*dir)] !== symbol){
            return false;
        }
    }
    return true;
}

const board = [[2,1,1],
            [1,2,2],
            [2,1,1]]
console.log(isSolved(board));
