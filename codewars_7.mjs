function rot13(message) {
  //your code here
  const lowerAlph = "abcdefghijklmnopqrstuvwxyz";
  message = message.replace(/[a-zA-z]/g, function (letter) {
    // check if letter is lower or upper case
    const aCharCode = letter == letter.toLowerCase() ? 97 : 65;
    const zCharCode = letter == letter.toLowerCase() ? 122 : 90;
    // get the ascii code of letter
    let newCharCode = 0;
    if (
      letter.charCodeAt(0) % (zCharCode - 13) >= aCharCode &&
      letter.charCodeAt(0) % (zCharCode - 13) <= zCharCode - 14
    ) {
      newCharCode = zCharCode - 12 + (letter.charCodeAt(0) - aCharCode);
    } else {
      newCharCode = letter.charCodeAt(0) - 13;
    }

    return String.fromCharCode(newCharCode);
    // see if char code is below
  });

  return message;
}
console.log(rot13("Anopqrstuvwxyzabcdefghijklm"));
