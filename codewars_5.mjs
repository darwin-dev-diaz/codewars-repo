function getSum(a, b)
{
   let smallest = a < b ? a : b,
       largest = smallest === a ? b : a;
   for(let i = smallest+1; i <= largest; i++){smallest += i;}
   return smallest;
}

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

console.log(getSum(1,0))