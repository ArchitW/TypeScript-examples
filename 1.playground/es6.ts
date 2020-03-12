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
