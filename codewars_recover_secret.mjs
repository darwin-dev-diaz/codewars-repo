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

      // of the letters in inFrontOfList, which one is at the furthest index in buildingList?
      console.log(`buildingList ${buildingList}`);
      let furthestLetter = 'NONE';
      for(const letter of inFrontOfList){
        if(buildingList.indexOf(letter)>buildingList.indexOf(furthestLetter)){
          furthestLetter = letter;
        }
      }
      
      console.log(`furthestLetter ${furthestLetter}`);
      
      //check if the letter already honors the furthestLetter in buildingList
      //is the letter already inFrontOfTheLetters it should be in front of?
      let honorsFurthestLetter = buildingList.indexOf(char) < buildingList.indexOf(furthestLetter) ? false : true;
      console.log(`honorsFurthestLetter ${honorsFurthestLetter}`);
      
      //swap char in buildingList with the furthestLetter if honorsFurthestLetter is false
      // also, increase movement count
      if(!honorsFurthestLetter){
        let charIndex = buildingList.indexOf(char);
        let furthestLetterIndex = buildingList.indexOf(furthestLetter);
        buildingList[charIndex] = furthestLetter;
        buildingList[furthestLetterIndex] = char;
        movements += 1;
      }
      console.log(`buildingList ${buildingList}`);
      
      console.log();
      console.log();
    }
  }


  return buildingList.join('');
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