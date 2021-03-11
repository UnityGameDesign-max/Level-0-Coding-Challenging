

function areaOfTriangle(side1, side2, side3){

    if (typeof(side1, side2, side3) === 'number'){
        s = (side1 + side2 + side3)/2;
        Area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
        return Area;
    }

    else{
        return "Invalid Inputs"
    }  
}
