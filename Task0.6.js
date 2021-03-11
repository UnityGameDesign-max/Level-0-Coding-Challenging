/*
Takes any number of inputs as arguments and return the maximum
output : integer
*/

function maximum() {
    var maxLength = [];
    var maxCount = 0;
    for(var i=0; i<arguments.length; i++){
        if (arguments.length >= maxCount.length){
            maxCount.length = arguments.length;
        }
    }
    for(var i=0; i<arguments.length; i++){
        if (arguments.length == maxCount.length){
            maxLength.push(arguments[i]);
        }
    }
    for(var i=0; i<maxLength.length; i++){
        console.log(arguments[i]);
    }
    
    return " ";
}

// console.log(maximum(1, 22, 3, 2));