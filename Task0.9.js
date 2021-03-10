/*
Takes a string and shows in vowels in that string 
output: typeof(string)
*/

function vowelDisplay(string){

    var vowels = " ";
    var ls = [];
    for(var i=0; i<string.length; i++){
        ls.push(string[i]);
    }
    for (var i=0; i<ls.length;  i++){

        switch (ls[i]){
            case "a" || "A":
                vowels += ls[i];
                break;
            case "e" || "E":
                vowels += ls[i];
                break;
            case "i" || "I":
                vowels += ls[i];
                break;
            case "o" || "O":
                vowels += ls[i];
                break;
            case "u" || "U":
                vowels += ls[i];
                break;
        }
    }
    return  "Vowels: " + vowels;
    
}

console.log(vowelDisplay("Umuzi"));