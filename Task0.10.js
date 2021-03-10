/* */

function commonLetters(str1, str2) {
    var commonLetter = ""

    for(var i = 0; i < str1.length; i++) {
        for(var j = 0; j< str2.length; j++) {
            if(str1[i] === str2[j]) {
                commonLetter += str1[i] + ", ";
            }
        }
    }
    result = "Common Letters: " + commonLetter;
    return result;
}

console.log(commonLetters("umuzi", "computers"))