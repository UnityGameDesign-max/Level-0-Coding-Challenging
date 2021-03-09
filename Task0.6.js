/*
Takes any number of inputs as arguments and return the maximum
output : integer
*/

function maximum() {
    var maxLength = [];
    for(var i=0; i<arguments.length; i++){
        maxLength.push(arguments[i]);
    }
    return maxLength;
}

console.log(maximum(1, 22, 3, 2));