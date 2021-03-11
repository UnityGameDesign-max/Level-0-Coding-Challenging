/*
Takes a string and shows in vowels in that string 
output: typeof(string)
*/

function vowelDisplay(string){

    var vowels = " ";
    var vowelList = [];
    var ls = [];
    for(var i=0; i<string.length; i++){
        vowelList.push(string[i]);
    }

    for (var i=0; i<vowelList.length;  i++){

        if (vowelList[i] === "a" || vowelList[i] ==="A"){
            vowels += vowelList[i] + ',';
           
        }
        else if(vowelList[i] === "e" || vowelList[i] ==="E"){
            vowels += vowelList[i] + ',';
        }
        else if(vowelList[i] === "i" || vowelList[i] ==="I"){
            vowels += vowelList[i] + ',';
        }

        else if(vowelList[i] === "o" || vowelList[i] ==="O"){
            vowels += vowelList[i] + ',';
        }
        else if(vowelList[i] === "u" || vowelList[i] ==="U"){
            
            vowels += vowelList[i] + ',';
        }

    }
    return  "Vowels: "+  vowels ;
    
}

console.log(vowelDisplay("Umuzi"));