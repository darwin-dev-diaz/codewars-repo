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
// console.log(recoverSecret(triplets1));

// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// BEST PRACTICES
// I really liked this solution, it was clever how he made use of recursion and how he manipulated the triplet array
var recoverSecret1 = function(triplets) {
  console.log(triplets);
  // this one uses recursion ... 
  // for each array in triplets (the word [first] returns to us the first element of each array in triplet)
  for(var [first] of triplets)
  {
    // if the index of the first character of each triple in triplets is either first or it isn't in the triplet list
    // basically saying if the character isn't in front of any other character
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      // then filter triplets by the lists where the first item is equal to the letter we are currently on
      // and for each of these filtered lists, remove the first item of (the current character) 
      // array.shift() removes and returns the first element of the array
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      // return the character and call this loop again on the augmented triplets list
      // also, though, we are making sure that our function doesn't search any tuples that are empty
      // we do this by removing empty arrays in triplets
      return first + recoverSecret1(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}

console.log(recoverSecret1(triplets1));

// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// BEST PRACTICE TWO
// when you come back, try to understand this for 30 mins before moving on to the next challenge
var recoverSecret2 = function(triplets) {
  var nodes = []
  var graph = {}
  var sortedlist = []

  function visit(node) {
    // if the node is not currently in our sortedList
    if (sortedlist.indexOf(node) < 0) {
      (graph[node] || []).forEach(function (node2) { visit(node2) })
      sortedlist.unshift(node)
    }
  }

  triplets.forEach(function (triplet) {
    triplet.forEach(function (node) {
      if (nodes.indexOf(node) < 0) nodes.push(node);
    })
    graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
    graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
  })

  while (nodes.length) visit(nodes.pop());
  return sortedlist.join('');
}