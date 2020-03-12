"use strict";
console.log('--------------ES6---------------------');
/*
let & const
let: can be reassigned
const:  - can not be reassigned
        - use whenever u know value is not going to change
*/
var variable = 'Test';
console.log(variable);
variable = 'new Value';
console.log(variable);
var maxLength = 100;
//error maxLength= 300
//block scope
function reset() {
    var variable = 619;
    // this will not print Test because of `variable` declared in function body. , local scope
    console.log(variable);
    // will print 100, global scope
    console.log(maxLength);
}
reset();
console.log(variable);
// Arrow functions
console.log('---------- Arrow Functions');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log('normal function', addNumbers(10, 20));
var arrowAddNumbers = function (number1, number2) { return number1 + number2; };
console.log('Arrow function', arrowAddNumbers(10, 20));
var arrowGreet = function () { return console.log('Hello Arrow Function'); };
console.log(arrowGreet());
// default params
var arrowDefaultParms = function (parm1, parm2) {
    if (parm2 === void 0) { parm2 = 1; }
    return parm1 + parm2;
};
console.log('default param (10)', arrowDefaultParms(10));
console.log('default param (10,5)', arrowDefaultParms(10, 5));
