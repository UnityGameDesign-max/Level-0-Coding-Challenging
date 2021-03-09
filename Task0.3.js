/*
Returns hello + string parameter 
output: typeof(string)

*/

function hello(string){
    if(typeof(string) === 'string'){
        greetings = "Hello " + string;
        return greetings;
    }
    else{
        return "Invalid input!";
    }
    
}

console.log(hello(6));

