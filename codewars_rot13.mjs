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

