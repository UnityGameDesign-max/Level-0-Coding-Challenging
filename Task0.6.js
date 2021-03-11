function maximum() {
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


