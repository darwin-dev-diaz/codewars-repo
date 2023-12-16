// Best practice
// here the number is saying that if a function is passed into it, return the function with the number as the parameter
// if the number doesn't get a function passed into it, then just return the number
function zero1(fn) {return fn ? fn(0) : 0}
function one1(fn) {return fn ? fn(1) : 1}
function two1(fn) {return fn ? fn(2) : 2}
function three1(fn) {return fn ? fn(3) : 3}
function four1(fn) {return fn ? fn(4) : 4}
function five1(fn) {return fn ? fn(5) : 5}
function six1(fn) {return fn ? fn(6) : 6}
function seven1(fn) {return fn ? fn(7) : 7}
function eight1(fn) {return fn ? fn(8) : 8}
function nine1(fn) {return fn ? fn(9) : 9}

// the arithmatic operators take in a number and return a function. the function says "add v with n" we provide n and the number we pass the operator into will provide v
function plus1(n) {return function(v) {return v + n}}
function minus1(n) {return function(v) {return v - n}}
function times1(n) {return function(v) {return v * n}}
function dividedBy1(n) {return function(v) {return v / n}}
// BEST PRACTICE END

function decideOp(num, arr){
    switch (arr[0]){
        case '+':
            return num + arr[1];
        case '-':
            return num - arr[1];
        case '/':
            return Math.floor(num / arr[1]);
        case '*':
            return num * arr[1];
    }

}

function zero(arr) {
    if (arr !== undefined){
        return decideOp(0,arr);
    }
    return 0;
}
function one(arr) {
    if (arr !== undefined){
        return decideOp(1,arr);
    }
    return 1;
}
function two(arr) {
    if (arr !== undefined){
        return decideOp(2,arr);
    }
    return 2;
}
function three(arr) {
    if (arr !== undefined){
        return decideOp(3,arr);
    }
    return 3;
}
function four(arr) {
    if (arr !== undefined){
        return decideOp(4,arr);
    }
    return 4;
}
function five(arr) {
    if (arr !== undefined){
        return decideOp(5,arr);
    }
    return 5;
}
function six(arr) {
    if (arr !== undefined){
        return decideOp(6,arr);
    }
    return 6;
}
function seven(arr) {
    if (arr !== undefined){
        return decideOp(7,arr);
    }
    return 7;
}
function eight(arr) {
    if (arr !== undefined){
        return decideOp(8,arr);
    }
    return 8;
}
function nine(arr) {
    if (arr !== undefined){
        return decideOp(9,arr);
    }
    return 9;
}

function plus(num) {return ['+',num];}
function minus(num) {return ['-',num];}
function times(num) {return ['*',num];}
function dividedBy(num) {return ['/',num];}

console.log(four(times(six())))