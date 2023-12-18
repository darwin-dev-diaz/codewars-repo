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