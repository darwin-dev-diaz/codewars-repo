function solution(str){

   const arr = [];
   for(let i = 0; i < str.length; i+=2){
      arr.push(str.slice(i,i+2).length == 2 ? str.slice(i,i+2) : str.slice(i,i+2) + '_');
   }
   return arr;
}

// console.log('abcdefg'.slice(0,2));
// console.log('abcdefg'.slice(2,4));
// console.log('abcdefg'.slice(4,6));
// console.log('abcdefg'.slice(6,8));
// console.log('abcdefg'.slice(6,8).length == 2 ? 'abcdefg'.slice(6,8) : 'abcdefg'.slice(6,8) + '_');

console.log(solution('abcdefghijkl'))
