function solution(list) {
  let outputArr = [];
  while (list.length > 0) {
    outputArr.push(rangeExtraction(list));
  }
  return outputArr.join();
}

function sumOfConsecutiveInts(firstTerm, lastTerm) {
  return ((lastTerm - firstTerm + 1) * (firstTerm + lastTerm)) / 2;
}

function rangeExtraction(arr) {
  let returnArr = arr.splice(0, 1);
  let actualSum = returnArr[0];
  let expectedSum = returnArr[0];

  for (const [i, num] of arr.entries()) {
    expectedSum = sumOfConsecutiveInts(returnArr[0], returnArr[0] + i + 1);
    actualSum += num;
    if (expectedSum !== actualSum) break;
    returnArr.push(num);
  }

  if (returnArr.length < 3) return returnArr[0];

  // Removes range from original Array
  arr.splice(0, arr.indexOf(returnArr[returnArr.length - 1]) + 1);
  return `${returnArr[0]}-${returnArr[returnArr.length - 1]}`;
}