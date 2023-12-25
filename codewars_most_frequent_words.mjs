function topThreeWords(text) {
    const dict = {}
    // what is this regular expression sayin
    let temp = text.match(/('?([A-Za-z]'?)+'?)/g);
    if(!temp) return [];
    temp.map(word => word.toLowerCase()).forEach(word => dict[word]? dict[word] += 1 : dict[word] = 1);

    const sortable = Object.entries(dict).sort((a,b)=>(b[1]-a[1]));
    return sortable.slice(0,3).map(entry=>entry[0]);
}


const myString = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income, isn't";

console.log(topThreeWords(myString));