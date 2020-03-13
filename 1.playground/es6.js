"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// Rest and Spread Operator
var myNumbers = [1, 2, 5];
console.log(Math.max.apply(Math, myNumbers));
var lllll = __spreadArrays(myNumbers, [10, 30, 50]);
console.log('... rest', lllll, typeof lllll);
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
makeArray(10, 20, 40);
//destructuring
//arrays
var myHobbies = ['cooking', 'playing'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log('[]', hobby1, hobby2);
//objects
var userData = { u_name: 'test', u_age: 30 };
var u_name = userData.u_name, u_age = userData.u_age;
console.log('{}', u_name, u_age);
//template literals : string with more features.
var userName = 'test';
var greet = "Hello,\nmy name is \"" + userName + "\"\nthis is cool";
console.log(greet);
/* Exercise

Re-write the below Code using the ES6 Features you learned throughout this Module.

// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
    return value * 2;
};
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
*/
console.log('------------------Exercise');
var double = function (val) { return val * 2; };
console.log(double(10));
var greet3 = function (name) {
    if (name === void 0) { name = 'default name'; }
    return console.log("Hello, " + name);
};
console.log(greet3(), greet3('param'));
var numbers_1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers_1));
var newArray_2 = [55, 20];
newArray_2 = __spreadArrays(newArray_2, numbers_1);
console.log(newArray_2);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = { firstName: 'Will', experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
