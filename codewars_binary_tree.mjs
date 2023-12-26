class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
  }

function treeByLevelsOne (rootNode) {
    let arr = [];
    if(rootNode.left && rootNode.right){
        arr = arr.concat(rootNode.left.value, rootNode.right.value,treeByLevelsOne(rootNode.left), treeByLevelsOne(rootNode.right));
    } else if (rootNode.left){
        arr = arr.concat(rootNode.left.value, treeByLevelsOne(rootNode.left));
    } else if (rootNode.right){
        arr = arr.concat(rootNode.right.value, treeByLevelsOne(rootNode.right));
    }
    return arr;
}

function treeByLevels(rootNode){
    if (!rootNode) return [];
    return [rootNode.value].concat(treeByLevelsOne(rootNode))
}

const treeOne =
      new Node(2,
        new Node(8,
          new Node(1,
            new Node(20),
            null),
          new Node(3,
            null,
            new Node(23))
        ),
        new Node(9,
          new Node(4,
            new Node(24),
            null),
          new Node(5,
            null,
            new Node(25))
        )
		);

        const treeTwo =
      new Node(2,
        new Node(8,
          new Node(1),
        ),
        new Node(9,
          null,
          new Node(5)
        )
		);

console.log(treeTwo);
console.log(treeByLevels(treeTwo));
// console.log(treeOne.left.left.left.value);
// console.log(treeByLevels(null));
