

function commonLetters(str1, str2) {
/*
Takes in two string inputs and return common letters  
output: string
*/

    var commonLetter = ""

    var commonLetterList = []
    for(var i = 0; i < str1.length; i++) {
        for(var j = 0; j< str2.length; j++) {
            if(str1[i] === str2[j]){
                if (commonLetterList.indexOf(str2[j]) === -1){
                    commonLetterList.push(str2[j])
                }
            }
        }
    }

    for(var k=0; k <commonLetterList.length; k++){
        commonLetter +=  commonLetterList[k] + ", " ;
    }
    result = "Common Letters: " + commonLetter;
    return result;
}

console.log(commonLetters("umzi", "compuuters"))