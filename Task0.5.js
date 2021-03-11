/* 
Takes 3 sides of any triangle and find the Area
output: typeof(float)
*/

function areaOfTriangle(side1, side2, side3){

    s = (side1 + side2 + side3)/2; 
    Area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

    return Area;
 
}
console.log(areaOfTriangle(3, 4, 5));
