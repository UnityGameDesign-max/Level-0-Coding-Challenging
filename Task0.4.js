/* 
Checks if parameter number is even || odd.
output: typeof(string)

*/

function evenOrOdd(number) {
    if (typeof(number) === 'number') {
        if (number % 2 == 0){
            return "even";
        }else{
            return "odd";
        }
    }

    else{
        return 'Invalid Inputs'
    }
    
}
