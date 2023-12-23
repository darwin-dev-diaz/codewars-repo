var recoverSecret = function (triplets) {
  let buildingList = triplets.splice(0, 1);
  let selectedList = getSelectedList(triplets,buildingList);
  positionChar(selectedList,buildingList);
  console.log(buildingList);

};
let triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];
recoverSecret(triplets1);
const totalChars = [...new Set(triplets1.join("").replaceAll(",", ""))].length;

let buildingList = [];
// add first triple in order. remove that triple from original list
buildingList = buildingList.concat(triplets1[0]);
triplets1.splice(0, 1);

// search to see if any of first triplets (triplets1[0][x]) match up with buildingList[0] and select that list
function getSelectedList(tripletArr,buildingList) {
  for (const [i, list] of tripletArr.entries()) {
    if (list[0] == buildingList[0]) {
      tripletArr.splice(i, i + 1);
      return list;
    }
  }
}

// positions the new characters from selectedList in buildingList correctly
function positionChar(selectedList,buildingList) {
  let dissimilarValue = selectedList.filter(
    (currentValue) => !buildingList.includes(currentValue)
  )[0];

  let letterToLeft = selectedList[selectedList.indexOf(dissimilarValue) - 1]
    ? selectedList[selectedList.indexOf(dissimilarValue) - 1]
    : false;

  if (letterToLeft) {
    let index = selectedList.indexOf(letterToLeft);
    buildingList.splice(index + 1, 0, dissimilarValue);
  } else {
    buildingList.splice(0, 0, dissimilarValue);
  }
}

