// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

console.log(isTriangle(1,2,9))
function isTriangle(a,b,c)
{
    if (a > 0 && b > 0 && c > 0 && (c < (a + b) && c > (a - b)) && (a < (c + b) && a > (c - b)) && (b < (a + c) && b > (a - c))) {
        return true;
    }
    return false;
}