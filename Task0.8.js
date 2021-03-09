/* Takes any number and converts to Hours and minutes */

function timeConverter(num){
    var deciNumber = num / 60;
    var hours = Math.floor(deciNumber);
    var minutes = Math.floor((deciNumber - hours)*60);


    if (hours == 1){
        var time = hours + " hour, " + minutes + " minutes";    
    }else{
        var time = hours + " hours, " + minutes + " minutes";
    }
    return time;
}

console.log(timeConverter(71));