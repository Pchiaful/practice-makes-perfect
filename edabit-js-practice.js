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

