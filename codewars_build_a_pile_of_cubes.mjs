// BEST PRACTICES START
// ONE
function findNb1(m) {
    let n = 0;
    // this guy decided to subtract from m. 
    while (m > 0){ m -= ++n**3; }
    // this statement is clear. if the the function got m to zero, that means m can be made up of square cubes. if m is any value besides zero, that means that it'll be defined and so it will throw -1, since the previous while loop only runs while m is greater than zero
    return m ? -1 : n;
  }
  console.log((0) ? -1 : 'nice');
// TWO

// BEST PRACTICES END

function findNb(m) {
    let total = 0;
    let currN = 1;
    while(total < m){
        
        total += (currN ** 3);
        if (total == m){
            return currN;
        } else if (total > m) {
            return (-1);
        }
        currN += 1;
    }
}

// console.log(findNb(4183059834009));
// console.log(-2);