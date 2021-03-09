/* 
Change the temp parameter from degrees to Fahrenheits
Also from Fahrenheits to degrees
Output : typeof(float) 
*/

function celsiusToFahrenheit (temp) {
    tempInFahrenheit = 9/5*temp + 32;
    return tempInFahrenheit;
}

function fahrenheitToCelsius (temp) {
    tempInCelsius = (temp - 32) * 5/9;
    return  tempInCelsius;
}

