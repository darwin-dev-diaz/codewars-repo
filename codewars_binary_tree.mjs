class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
  }

  const treeOne =
      new Node(2,
        new Node(8,
          new Node(1,
            new Node(21)),
          new Node(3,
            null,
            new Node(23))
        ),
        new Node(9,
          new Node(4,
            new Node(24)),
          new Node(5,
            new Node(25),
            new Node(25))
        )
		);  

function treeByLevels (rootNode) {
    if(!rootNode) return [];


}

function childrenInList(rootNode){
    let arr = [];
    if(rootNode.left) arr.push(rootNode.left);
    if(rootNode.right) arr.push(rootNode.right);
    return arr;
}

function getValue(rootNode){
    return rootNode.value;
}


// MY BRAIN IS HURTING
let arr = [];
//level one to two
let nodeList = [];
nodeList = childrenInList(treeOne).flat();
console.log(nodeList);
arr = arr.concat(nodeList.map(node=>getValue(node)));

//level two to three
nodeList = nodeList.map((node=>childrenInList(node))).flat();
arr = arr.concat(nodeList.map(node=>getValue(node)));
// console.log(nodeList);

//level three to four (This WORKS)
nodeList = nodeList.map((node=>childrenInList(node))).flat();
arr = arr.concat(nodeList.map(node=>getValue(node)));
console.log(arr);

