/* Takes any number and converts to Hours and minutes */

function timeConverter(num){
    var deciNumber = num / 60;
    var hours = Math.floor(deciNumber);
    var minutesDiff = (deciNumber - hours)*60
    var minutes = Math.round(minutesDiff);

    if (hours === 1){
        hourString = hours +  " hour, ";    
    }else{
        hourString = hours + " hours, ";
    }
    if(minutes === 1){
        minuteString = minutes + " minute ";
    }else{
        minuteString = minutes + " minutes ";
    }

    time = hourString + minuteString;
    return time;
}

console.log(timeConverter(61));