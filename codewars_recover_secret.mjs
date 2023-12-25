function recoverSecret(triplets) {
  // create string of individual chars and the building list
  const originalString = [...new Set(triplets.join("").replaceAll(",", ""))].join('');
  let buildingList = Array.from(originalString);
  // while the number of movements is greater than 0, iterate through the chars of the originalString
  let movements = 1;
  while(movements > 0){
    movements = 0;
    let containsCharList = []
    for(const char of originalString){
      // get a list of the all the lists that contain char
      console.log(`char ${char}`);
      containsCharList = triplets.filter(list => list.includes(char));
      console.log(`containsCharList`);
      console.log(containsCharList);

      // is char in front of any other characters in the list of contain char list?
      let inFrontOfList = [] 
      for(const list of containsCharList){
        for(const letter of list){
          if(list.indexOf(letter) < list.indexOf(char)) inFrontOfList.push(letter); 
        }
        inFrontOfList = [...new Set(inFrontOfList)]
      }
      console.log(`inFrontOfList ${inFrontOfList}`);

      // if the char isn't in front of any other chars, then place that at buildingList[0]
      // code here

      // of the letters in inFrontOfList, which one is at the furthest index?
      console.log(`buildingList ${buildingList}`);
      let inFrontLargestIndex = inFrontOfList.reduce((accumulator, currentValue) => {if(buildingList.indexOf(currentValue) > accumulator) accumulator = currentValue}, 'test');
      // current problem is that this reduce method isnt returning to me the letter in inFrontOfList that is furthest in buildingList


      console.log(`inFrontLargestIndex ${inFrontLargestIndex}`);
      console.log();
    }
  }


  return;
}
const triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
console.log(recoverSecret(triplets1));