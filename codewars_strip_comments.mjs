function solution(input, markers) {
    const expression = `\\s*(${markers[0] == "$" ? '\\$' : markers[0]}|${markers[1] == "$" ? '\\$' : markers[1]})(.)+`;
    const re = new RegExp(expression, 'g');

    input = input.replace(re, "");
    return input.trim();
}
console.log(solution("a #b\nc\nd $e f g", ['#', '$' ]));
// let commentOne1 = '#'
// let commentTwo1 = '!'
// let expression1 = commentTwo ? `\s(${commentOne}|${commentTwo})(.)+` : `(${commentOne})(.)+`;
// let re = new RegExp(expression, 'g');

// console.log("apples, pears # and bananas\ngrapes\nbananas !apples".replace(re, ""));