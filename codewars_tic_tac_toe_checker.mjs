function isSolved(board) {
    const checkHorizontal = [[]]
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

const arr = [[0,1,0],
            [0,1,0],
            [0,1,0]]
const symbol = 1;
const checkHorizontal = [[0,0],[1,0],[2,0]];
const checkVeritcal = [[0,0],[0,1],[0,2]];
const checkDiagnol = [[0,0],[0,2]];

// for(const coords of checkHorizontal){
//     if(horizontalCheck(arr, coords[0], symbol)){
//         console.log(`${symbol} matched horizontally at ${coords}`);
//         break;
//     }
// }
for(const coords of checkVeritcal){
    if(verticalCheck(arr, coords[1], symbol)){
        console.log(`${symbol} matched vertically at ${coords}`);
        break;
    }
}
// for(const coords of checkHorizontal){
//     if(horizontalCheck(arr, coords[0], symbol)){
//         console.log(`${symbol} matched horizontally at ${coords}`);
//         break;
//     }
// }