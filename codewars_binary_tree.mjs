class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const treeOne = new Node(
  2,
  new Node(8, new Node(1, new Node(21)), new Node(3, null, new Node(23))),
  new Node(
    9,
    new Node(4, new Node(24)),
    new Node(5, new Node(25), new Node(25))
  )
);

const treeTwo = new Node(2);

function placeChildrenInList(rootNode) {
  let arr = [];
  if (rootNode.left) arr.push(rootNode.left);
  if (rootNode.right) arr.push(rootNode.right);
  return arr;
}
function getValue(rootNode) {
  return rootNode.value;
}

console.log(treeByLevels(null));
console.log(treeByLevels(treeOne));

// MY BRAIN IS HURTING
let arr = [];
//level one to two
// let rootNodes = treeOne;
// rootNodes = Array.isArray(rootNodes) ? rootNodes.map((node=>placeChildrenInList(node))).flat() : placeChildrenInList(treeOne).flat(); // call function here?
// arr = arr.concat(rootNodes.map(node=>getValue(node))); // return here

// // //level two to three
// rootNodes = Array.isArray(rootNodes) ? rootNodes.map((node=>placeChildrenInList(node))).flat() : placeChildrenInList(treeOne).flat(); // call function here?
// arr = arr.concat(rootNodes.map(node=>getValue(node)));
// // return arr.concat(treeByLevels(rootNodes))
// rootNodes = Array.isArray(rootNodes) ? rootNodes.map((node=>placeChildrenInList(node))).flat() : placeChildrenInList(treeOne).flat();
// console.log(rootNodes); // call function here?
// arr = arr.concat(rootNodes.map(node=>getValue(node)));

let rootNodes = treeTwo;
rootNodes = Array.isArray(rootNodes)
  ? rootNodes.map((node) => placeChildrenInList(node)).flat()
  : placeChildrenInList(rootNodes).flat(); // call function here?
arr = arr.concat(rootNodes.map((node) => getValue(node))); // return here
