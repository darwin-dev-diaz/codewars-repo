function isPangram(string){
    const alphabet = new Set([
        'a', 'b', 'c', 'd', 'e', 'e', 'e',
        'f', 'g', 'h', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'o', 'o', 'o',
        'p', 'q', 'r', 'r', 's', 't', 't',
        'u', 'u', 'v', 'w', 'x', 'y', 'z'
      ])
    // reduce string to just characters and lower all the characters
    string = string.replace(/[^A-Za-z]/g,'').toLowerCase();
    // make a set from the string and sort that array
    const letterSet = new Set(Array.from(string).sort());

    // test to see if the organized and redueced set is the same as the alphabet
    return JSON.stringify(Array.from(letterSet)) === JSON.stringify(Array.from(alphabet));
  }

  function isPangram1(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(x => string.indexOf(x) !== -1);

    // the .every function runs a callback function for every element in the array. If the callback funciton returns true for every value of the array, .every returns true. if the callback function doesn't return true for every value in the array, .every returns false

    //the indexOf method searches a string for the provided value and displays its index. if the value isn't in the string, then the function returns
  }

console.log(isPangram1('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram1('The quick brorx jumps over the lazy dog.'));