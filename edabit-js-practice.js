"use strict";

function addition(a, b) {
    return a + b;
}
console.log(addition(2, 4));

function nextEdge(side1, side2) {
    return (side1 + side2) -1;
}
console.log(nextEdge(2,4));

function addition1(num) {
    return num + 1;
}
console.log(addition1(2));

function triArea(base, height) {
    return base * height / 2;
}
console.log(triArea(2,4));

function calcAge(age) {
    return age * 365;
}
console.log(calcAge(20));

function howManySeconds(hours) {
    return hours * 3600;
}
console.log(howManySeconds(2));

function findPerimeter(length, width) {
    return (2 *length) + (2 * width);
}
console.log(findPerimeter(2,4));

function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue(1,2,3));

function points(twoPointers, threePointers) {
    return (2 * twoPointers) + (3 * threePointers);
}
console.log(points(2,3));

function circuitPower(voltage, current) {
    return voltage * current;
}
console.log(circuitPower(5,5));

function remainder(x, y) {
    return x%y;
}
console.log(remainder(2,4));

function lessThan100(a, b) {
    if (a+b < 100) {
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(22,50));

function whichIsLarger(f, g) {
    if (f() > g()) {
        return "f";
    }else if ( g() > f()) {
        return "g";
    }else if (f() == g()) {
        return "neither";
    }
}
console.log(whichIsLarger(5,6));

function shiftToLeft(x, y) {
    return x * (2^y);
}
console.log(shiftToLeft(2,5))

