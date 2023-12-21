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

let board = [[2,1,1],
            [1,2,2],
            [2,1,1]]
console.log(isSolved(board));


// BEST PRACTICES
// ONE
function isSolved1(board) {
    board = board.join('-').replace(/,/g,'');
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
 }

//  logic of what he did.
// first he converted the array of arrays to a string and removed the commas with .replace(/,/g,'');
// second he checked if 2 is the winner by searching for winning patterns with
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
// REGEX.test(String) can be used to see whether a regular expression appear inside of a string
// he later made the same test for 1
// if neither 1 nor 2 won, he checks if there are zeros on the board, if there are, he knows that it is an uncompleted game so he returns -1
// if neither 1 nor 2 won, and there aren't any zeros on the board, he then knows it is a cats game. in which case he returns 0

// very clever solution. to summarize, he converted the board to a regular expression and then applied patterns to check if either 1 or 2 won.

 board = board.join('-').replace(/,/g,'')
 console.log(board);


//  TWO
function isSolved(board) {
    // here he is saying which patterns in a 1d array would make a symbol win
    var win = [
      [0,1,2], [3,4,5], [6,7,8], // Horizontal
      [0,3,6], [1,4,7], [2,5,8], // Vertical
      [0,4,8], [2,4,6]           // Diagonal
    ];
  
    // .concat appends arrays to each other, so here he is basically taking the board (2d array)and making it into a long array (1d array)
    board = board[0].concat(board[1], board[2]);
    // here he is iterating over the arrays in the win patterns array
    for (var i = 0, r; i < win.length; i++)
        // 
      if (r = val(win[i], board))
        return r;
    
    return ~board.indexOf(0) ? -1 : 0;
  }
  
  // Return the value if all values are the same
  function val(p, b) { return b[p[0]] == b[p[1]] && b[p[0]] == b[p[2]] && b[p[0]]; }
// BEST PRACTICE END
