function scramble(str1, str2) {
    let str1Arr = Array.from(str1);
    const boolArr = Array.from(str2).map(function(char){
        const bool = str1Arr.indexOf(char) !== -1 ? true : false;
        str1Arr.splice(str1Arr.indexOf(char),1);
        return bool;
    });
    return boolArr.indexOf(false) == -1 ? true : false;
  }
  
console.log(scramble('fdsrejavascriptwqefdfdsafd', 'javascript'));

function scramble1(str1, str2) {
    const str1Arr = Array.from(str1);
    const str2Arr = Array.from(str2);
    for(let i = 0; i < str2Arr.length; i++){
        let currCharIndex = str1Arr.indexOf(str2Arr[i]);
        if (currCharIndex == -1){return false;}
        str1Arr.splice(currCharIndex,1);   
    }
    return true;
}
console.log(scramble('scriptjva', 'javascript'));