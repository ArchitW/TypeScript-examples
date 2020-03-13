console.log('--------------ES6---------------------');

/*
let & const
let: can be reassigned
const:  - can not be reassigned
        - use whenever u know value is not going to change
*/
let variable: string = 'Test';
console.log(variable);
variable = 'new Value';
console.log(variable);

const maxLength: number = 100;
//error maxLength= 300

//block scope

function reset() {
	let variable: string | null | number = 619;
	// this will not print Test because of `variable` declared in function body. , local scope
	console.log(variable);
	// will print 100, global scope
	console.log(maxLength);
}
reset();
console.log(variable);

// Arrow functions
console.log('---------- Arrow Functions');
const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;
};
console.log('normal function', addNumbers(10, 20));

const arrowAddNumbers = (number1: number, number2: number) => number1 + number2;
console.log('Arrow function', arrowAddNumbers(10, 20));

const arrowGreet = (): void => console.log('Hello Arrow Function');
console.log(arrowGreet());

// default params

const arrowDefaultParms = (parm1: number, parm2: number = 1): number => {
	return parm1 + parm2;
};
console.log('default param (10)', arrowDefaultParms(10));
console.log('default param (10,5)', arrowDefaultParms(10, 5));

// Rest and Spread Operator

let myNumbers: Array<number> = [ 1, 2, 5 ];
console.log(Math.max(...myNumbers));

let lllll = [ ...myNumbers, 10, 30, 50 ];
console.log('... rest', lllll, typeof lllll);

function makeArray(...args: number[]) {
	console.log(args);
}
makeArray(10, 20, 40);

//destructuring
//arrays
const myHobbies = [ 'cooking', 'playing' ];
const [ hobby1, hobby2 ] = myHobbies;
console.log('[]', hobby1, hobby2);
//objects
const userData = { u_name: 'test', u_age: 30 };
const { u_name, u_age } = userData;
console.log('{}', u_name, u_age);

//template literals : string with more features.

const userName = 'test';
const greet = `Hello,
my name is "${userName}"
this is cool`;
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
const double = (val: number): number => val * 2;
console.log(double(10));

const greet3 = (name: string = 'default name') => console.log(`Hello, ${name}`);
console.log(greet3(), greet3('param'));

var numbers_1: Array<number> = [ -3, 33, 38, 5 ];
console.log(Math.min(...numbers_1));

var newArray_2 = [ 55, 20 ];
newArray_2 = [ ...newArray_2, ...numbers_1 ];
console.log(newArray_2);

var testResults = [ 3.89, 2.99, 1.38 ];
var [ result1, result2, result3 ] = testResults;
console.log(result1, result2, result3);

const scientist = { firstName: 'Will', experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
