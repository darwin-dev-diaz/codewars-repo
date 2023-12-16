function duplicateEncode(word){
    word = word.toLowerCase().split('');
    const counts = {};

    // keep in mind that only a for OF loop returns the values of an iterable. for IN returns the index *facepalm*

    for (const letter of word){
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
    }

    for (const [i, l] of word.entries()){
        word[i] = counts[l] > 1 ? ')' : '('; 
    }

    return word.join("");
}



console.log(duplicateEncode('(( @'));

// const arr = ['a','a','c','b','b'];
// const counts = {};

// for (const num of arr){
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
//     // this asks if counts[5] exists. if it doesn't, we assign one to counts[5]. if it does, we add 1 to counts[5]
// }
// console.log(counts[5], counts[2], counts[9], counts[4]);


function duplicateEncode1(word){
    return word
      .toLowerCase()
      .split('')
    //   a = current element
    //   i = current index
    //   w = the whole array
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        // this line is saying that if the first index of w[a] is the same as the last index of w[a] (meaning that the letter only appears once) return "(" (because it only occurs once) if the indecies are not the same return ")"

      })
      .join('');
  }