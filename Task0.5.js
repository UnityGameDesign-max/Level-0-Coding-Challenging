

function areaOfTriangle(side1, side2, side3){
/* 
Takes 3 sides of any triangle and find the Area
output: typeof(float)
*/

    if (typeof(side1, side2, side3) === 'number'){
        s = (side1 + side2 + side3)/2;  //semi-Perimeter of a triangle
        Area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
        return Area;
    }

    else{
        return "Invalid Inputs"
    }  
}
