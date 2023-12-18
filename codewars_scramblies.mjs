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