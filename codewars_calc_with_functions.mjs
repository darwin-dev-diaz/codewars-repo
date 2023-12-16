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