function solution(list){
    // TODO: complete solution 
   }
function sumOfConsecutiveInts(firstTerm, lastTerm){
    const numberOfTerms = lastTerm - firstTerm + 1;
    return (numberOfTerms * (firstTerm + lastTerm))/2;
}
function rangeExtraction(arr){
    let returnArr = arr.splice(0,1);
    let arrCopy = arr;
    let actualSum = returnArr[0];

    for(const [i, num] of arrCopy.entries()){
        let expectedSum = sumOfConsecutiveInts(returnArr[0],returnArr[0]+i+1);
        actualSum += num;
        if(expectedSum!==actualSum) break;
        returnArr.push(num);
    }

    if(returnArr.length < 3) return returnArr[0];
    return `${returnArr[0]}-${returnArr[returnArr.length-1]}`;
}

// i have a function that returns the nearest range from a list

let testArr = [1,12,3,4,5,6,8];
console.log(rangeExtraction(testArr)); //['1-8'] expected
console.log(testArr);