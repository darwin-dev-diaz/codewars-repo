function rot13(message) {
  //your code here
  message = message.replace(/[a-zA-Z]/g, function (letter) {
    // check if letter is lower or upper case
    const aCharCode = letter == letter.toLowerCase() ? 97 : 65;

    // assign the new char code based on whether or not the character is problematic (meaning whether or not subtracting 13 from the character will bring us outside the ascii a-z or A-Z range)
    const newCharCode = (letter.charCodeAt(0)-13 < aCharCode) ? letter.charCodeAt(0)+13 : letter.charCodeAt(0)-13;

    return String.fromCharCode(newCharCode)
    });

  return message;
}
// console.log(rot13("NOPQRSTUVWXYZABCDEFGHIJKLM"));
// console.log(rot13("nopqrstuvwxyzabcdefghijklm"));
console.log(rot13("mC=;E:.Ri}^8G!24"));
// console.log(rot13("Uryyb, ubj ner lbh?"));


// what is happening here on this top response?
function rot13_1(message) {
  // here he's defining two alphabets, one regular and one converted with rot13
  // its interesting here that he doesn't use the ascii table instead he just uses these two strings
  const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  // the regex gi tag means that it will select all of the alphabet chars irrespective of the case
  //  the func c => b[a.indexOf(c)]
  // is first finding the index of the current letter in the normal alphabet list
  // then it is pass that index into the b string which is already shifted by 13 characters. so if you pass "n" you will get its index is the a string which is 13, and then you pass that index into the b string. 
  // you will get a because a is at index 13

  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}