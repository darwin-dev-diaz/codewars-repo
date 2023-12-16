function alphabetPosition(text) {
    text = text.replace(/[^A-Za-z]/g,'').toLowerCase().split('');
    
    let letterIndexString = '';
    for(const letter in text){
        letterIndexString += "abcdefghijklmnopqrstuvwxyz".indexOf(text[letter]) + 1;
        if(letter < text.length - 1){
            letterIndexString += " ";
        }
    }
    return letterIndexString;
  }
  function alphabetPosition1(text) {
    text = text.replace(/[^A-Za-z]/g,'').toLowerCase().split('');

    let letterIndexString = '';
    for(const letter in text){
        letterIndexString += "abcdefghijklmnopqrstuvwxyz".indexOf(text[letter]) + 1;
        if(letter < text.length - 1){
            letterIndexString += " ";
        }
    }
    return letterIndexString;
  }

console.log(alphabetPosition1("The sunset sets at twelve o' clock."));