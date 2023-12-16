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

console.log(findNb(4183059834009));
