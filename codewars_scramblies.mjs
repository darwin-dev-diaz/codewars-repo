// function scramble(str1, str2) {
//     let str1Arr = Array.from(str1);
//     const boolArr = Array.from(str2).map(function(char){
//         const bool = str1Arr.indexOf(char) !== -1 ? true : false;
//         str1Arr.splice(str1Arr.indexOf(char),1);
//         return bool;
//     });
//     return boolArr.indexOf(false) == -1 ? true : false;
//   }
  
// console.log(scramble('fdsrejavascriptwqefdfdsafd', 'javascript'));

// function scramble1(str1, str2) {
//     const str1Arr = Array.from(str1);
//     const str2Arr = Array.from(str2);
//     for(let i = 0; i < str2Arr.length; i++){
//         let currCharIndex = str1Arr.indexOf(str2Arr[i]);
//         if (currCharIndex == -1){return false;}
//         str1Arr.splice(currCharIndex,1);   
//     }
//     return true;
// }
// console.log(scramble('scriptjva', 'javascript'));



function countAndPopulate(arr, obj){
    for(const char of arr){
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }
}
function scramble(str1, str2) {
    const obj1 = {};
    const obj2 = {};
    const str2SetArr = Array.from(new Set(str2));
    countAndPopulate(Array.from(str1), obj1);
    countAndPopulate(Array.from(str2), obj2);
    // Array.from(str1).forEach((char)=> obj1[char] ? obj1[char] += 1 : obj1[char] = 1);
    // Array.from(str2).forEach((char)=> obj2[char] ? obj2[char] += 1 : obj2[char] = 1);
    for(let i = 0; i < str2SetArr.length; i++){
        if(!obj1[str2SetArr[i]] || (obj1[str2SetArr[i]] < obj2[str2SetArr[i]])){
            return false;
        }
    }
    return true;
}

console.log(scramble('javascript', 'javascriptt'));

// Learning from code warriors
function scramble1(str1, str2) {
    // define a charcount object that will store the number of char occurrences
    const charCount = {};
  
    // Count the occurrences of characters in str1
    // i didn't know you could iterate over a string like this... it would not have been needed for me to convert the string into an arr
    for (let char of str1) {
        // this line of code is saying that if charCount[char] doesn't exist then set charCount[char] to 1
        // if it does exist, then simply add one to char count
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Check if characters in str2 are present in str1 with sufficient count
    for (let char of str2) {
        // if the previously defined charCount doesn't contain occurrences of the current character, then automatically just return false.
      if (!charCount[char]) {
        return false;
      }

    //   if the charCount does contain the current letter, then remove one from it's count.
    // this serves to account for the potential multiple characters in str2
    // if we decrement too much, the charCount will eventually get to zero and if it does, the above if statement will make the function return false
      charCount[char]--;
    }
  
    return true;
  }

//   what i've learned from this exercise is that
// - you can iterate over the characters of a string with for(const char of string)
// - its faster to write your own methods than to rely on the built in javascript functions
// (why is that true?)