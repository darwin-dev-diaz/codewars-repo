function towerBuilder(nFloors) {
    const arr = [];
    let str = "8".repeat(nFloors);
    for(nFloors; nFloors > 0; nFloors--){
        arr.push(str);
        str.replace(/f/,' ');

    }
  }

  console.log('*'.repeat(8));
  console.log('test');