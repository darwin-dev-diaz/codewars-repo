function isSolved(board) {
    for(const [x, row] of board.entries()){
        for(const [y, column] of row.entries()){
            console.log([x,y],column);
        }
    }
  }

isSolved([[0,0,1],
          [0,1,2],
          [2,1,0]]);