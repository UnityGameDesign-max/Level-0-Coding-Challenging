function maximum() {
/*
Takes any number of inputs as arguments and return the maximum
output : integer
This is the Bonus question that takes any number of arguments in a function
and return a maximum
*/

    var maximumList = [];
    maximumCounter = 0;

    for (var i=0; i<arguments.length; i++) {
        maximumList.push(arguments[i]);
    }
    
    for (var i=0; i<maximumList.length; i++) {
        if(maximumList[i] > maximumCounter ){
            maximumCounter = maximumList[i];
        }
    }
    return maximumCounter;

}


