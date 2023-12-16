function toCamelCase(str){
    //get a list of all the cases of _[letter] or -[letter]
    const matches = str.match(/[_-]./g);

    // replace the matches of the regular expression /[_-]./g with it's corrisponding matches index
    str = str.replace(/[_-]./g, match => matches[matches.indexOf(match)][1].toUpperCase());
    
    // return string
    return str;
}

console.log(toCamelCase('the_stealth_warrior'))