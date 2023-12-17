function towerBuilder(nFloors) {
    const outputArr = []
    const tempArr = Array.from(' '.repeat((2*nFloors)-1));
    const midWay = Math.floor(tempArr.length / 2);
    tempArr[midWay] = '*';

    for(let i = 1; i <= nFloors; i++){
        outputArr.push(tempArr.join(""));
        tempArr[Math.floor(tempArr.length/2) - i] = '*';
        tempArr[Math.floor(tempArr.length/2) + i] = '*';
    
      }
    
    return outputArr;

  }
  
  console.log(towerBuilder(1));