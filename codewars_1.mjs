function narcissistic(value) {
    // Code me to return true or false
    let compareValue = 0;
    let valueArr = Array.from(String(value));
    const exponenet = valueArr.length;

    valueArr = valueArr.map(x => (+x)**exponenet);

    for(let num in valueArr){
        compareValue += valueArr[num];
    }

    return (compareValue === value);
  }