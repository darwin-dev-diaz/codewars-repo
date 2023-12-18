function humanReadable (seconds) {
    const timeArr = []
    timeArr[0] = Math.floor(seconds/3600); 
    timeArr[1] = Math.floor((seconds%3600)/60); 
    timeArr[2] = Math.floor((seconds%3600)%60);
    const timeString = timeArr.map(x => String(x).padStart(2, "0")).join(":");
    return timeString;

  }
  const seconds = 45296;
  const timeArr = []
  timeArr[0] = Math.floor(seconds/3600); 
  timeArr[1] = Math.floor((seconds%3600)/60); 
  timeArr[2] = Math.floor((seconds%3600)%60);
  const timeString = timeArr.map(x => String(x).padStart(2, "0")).join(":");
  console.log(timeString);
  
  console.log(Math.floor(seconds/3600)); // total hours
  console.log(Math.floor((seconds%3600)/60)); // total minutes without hours
  console.log((seconds%3600)%60); // total seconds without minutes
//   3600 seconds in one hour

console.log('0'+'1');
//  