function recoverSecret(triplets) {
  // find the number of letters in the secret word
  const numberOfLetters = [...new Set(triplets.join("").replaceAll(",", ""))]
    .length;
  // create a building list from the the first entry of triplets. remove first entry
  const buildingList = triplets.splice(0, 1)[0];
  // get a selected list for all unique letters
  for (let i = 0; i < numberOfLetters; i++) {
    
  }
  
  // search for another list in triplets that starts with the same letter as buildingList[0]. put that list into a selectedList variable
  let selectedList = setSelectedList(buildingList, triplets);

  // find the dissimilar character (between buildingList and selectedList)
  let dissimilarChar = selectedList.filter(
    (char) => buildingList.indexOf(char) == -1
  )[0];
  // place the dissimilarChar at the correct location in buildingList
  buildingList.splice(selectedList.indexOf(dissimilarChar), 0, dissimilarChar);

  return buildingList;
}

function setSelectedList(buildingList, triplets) {
  // case where there is a list inside of triplets where the first char is equal the the first char of buildingList
  for (const [i, list] of triplets.entries()) {
    if (list[0] == buildingList[0]) {
      return triplets.splice(i, i + 1)[0];
    }
  }
  // case where there isn't a list inside of triplets where the fist chat is the the same as the first char of buildingList
  for (const [i, list] of triplets.entries()) {
    if (list[1] == buildingList[0]) {
      return triplets.splice(i, i + 1)[0];
    }
  }
}

function recoverSecret1(triplets) {
  const numberOfLetters = [...new Set(triplets.join("").replaceAll(",", ""))]
    .length;
  const buildingList = triplets.splice(0, 1)[0];
  for (let i = 0; i < numberOfLetters; i++) {
    let selectedList = setSelectedList(buildingList, triplets);
    let dissimilarChar = selectedList.filter(
      (char) => buildingList.indexOf(char) == -1
    )[0];
    buildingList.splice(selectedList.indexOf(dissimilarChar), 0, dissimilarChar);
    console.log(buildingList);
  }

  return buildingList;
}


const triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

// console.log(recoverSecret1(triplets1));

let buildingList = [ 't', 'i', 's', 'u', 'p' ];
let triplets = [
  ["w", "h", "i"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["w", "h", "s"],
];

console.log(setSelectedList(buildingList, triplets))

// current problem is that in my function loop, selectedList is set to undefined for some reason. 