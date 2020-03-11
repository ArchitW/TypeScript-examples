/*
tsc --init // compile all ts files to js
Available types

string = "this is string"   let var = "test" or let var:string
number = 1, 10.1            let var:number
boolean  = true/false       ler var:bool

arrays = let array = [10,20,30,40]  

let arrayOfNumbers = [ 10, 20, 30, 40 ];
let arrayOfStrings = [ 'aa', 'aaa', 'aaaa' ];
let arrayOfAnything: any[] = [ 1, '1', 'aa', '2' ];

tuples : if we know types in the array already
let address :[string, number] = ["my string", 100] //note order is important

enum 

*/
//array
let arrayOfNumbers = [ 10, 20, 30, 40 ];
let arrayOfStrings = [ 'aa', 'aaa', 'aaaa' ];
let arrayOfAnything: any[] = [ 1, '1', 'aa', '2' ];

//tuples
let address: [string, number] = [ 'my string', 100 ]; //note order is important

//enums
enum Color {
	Red, // this will be 0
	Orange,
	Green = 100, // explicits value assignment
	Blue, // this will be 101
	Black = 2
}
console.log(Color.Red, Color.Orange, Color.Green, Color.Blue, Color.Black);

let myColor: Color = Color.Green;
console.log(myColor);

//any : careful with any, try to avoid it, gives up all the advantages TS offers
let car: any = 'BMW';

//functions

function returnMyName(): string {
	let name: string = 'test';
	return name;
}

console.log(returnMyName());

function returnVoid(): void {
	console.log('this function has no return');
}

//argument type
function multiply(num1: number, num2: number): number {
	return num1 * num2;
}
console.log(multiply(10, 2));

//function types, calling
let sayH;
sayH = returnVoid;
console.log(sayH);
sayH();

let myMultiply: (val1: number, val2: number) => number; // name does not matter, type matter
myMultiply = multiply;
console.log(myMultiply(10, 20));

//objects
let obj: { name: string; age: number } = {
	name: 'user',
	age: 20
};

// you can not assign obj with different keys obj = {} will throw error.
// in function order if important.
// in objects keys are important.

//complex object

let complexObj: { data: number[]; output: (all: boolean) => number[] } = {
	data: [ 10, 20, 30, 40 ],
	output: function(all: boolean): number[] {
		console.log(all);
		return this.data;
	}
};

console.log(complexObj, complexObj.data, complexObj.output(false));

// type alias
// let complexObjCopy: complexObj; <== doing this is not possible

type complex = { data: number[]; output: (all: boolean) => number[] };
let complexObjCopy: complex;

// if you are not sure about the type ex: if u know type might be number and string but not bool
// union types
let age: number | string; // might be 27 or '27' , you may chain more than 2 types

//how to check types
let finalValue = 'its a string';
if (typeof finalValue === 'string') {
	console.log('yeah this is a string');
}

//never
function neverReturns(): never {
	// why? this function not returning anything, thats why no void
	throw new Error('An Error');
}
