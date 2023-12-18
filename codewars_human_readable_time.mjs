function humanReadable (seconds) {
    const hours = Math.floor(seconds/3600); 
    const mins = Math.floor((seconds%3600)/60); 
    const secs = (seconds%3600)%60;
    return [hours, mins, secs].map(x => String(x).padStart(2, "0")).join(":");
  }

  console.log(humanReadable(432149))

//   changing my code after looking at people from code wars
function humanReadable1 (seconds) {
    const HHMMSS = [Math.floor(seconds/3600),Math.floor((seconds%3600)/60),seconds%60];
    return HHMMSS.map(x => String(x).padStart(2, "0")).join(":");
  }

  console.log(humanReadable1(432149))