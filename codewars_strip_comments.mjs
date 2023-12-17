function solution(input, markers) {
    // this regular expression gets the text after the marker identifier
    const expression = `\\s*(${markers[0] == "$" ? '\\$' : markers[0]}|${markers[1] == "$" ? '\\$' : markers[1]})(.)+`;
    const re = new RegExp(expression, 'g');

    input = input.replace(re, "");
    return input.trim();
}
// BEST PRACTICES START
// ONE
function solution(input, markers) {
    // split input by lines into an array
    return input.split('\n').map(
        // map that array to a function that takes a line as input
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }
// BEST PRACTICES END