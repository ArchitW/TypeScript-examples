/*
tsc --init // compile all ts files to js
ts config:
----------
sourceMap [default:false] : .ts files are seraved on server, used for debugging
noImplicitAny[default:false] :  
strictNullChecks : scan files to check if variables are Null, useful if we forget to ini variables
noUnusedParameters[default:false] : check if params are used <declared but never used>
*/
//array

//Strings
let strings: string = 'this is string';
//numbers
let numbers: number = 12;

//booleans
let bools: boolean = true;

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

//Nullable types
// all un-initialized variables are undefined
let canBeNull: number | null;
canBeNull = null;
canBeNull = 10; // this will throw error if only type used is null, use union types

let canThisBeAny = null;
canThisBeAny = 10;

/*
Try to be as explicit as possible and add Types to everything you can!

let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
*/

type bankAcc = { money: number; deposit: (value: number) => void };
let bankAccount: bankAcc = {
	money: 2000,
	deposit: function(value: number) {
		this.money += value;
	}
};

let myself: { name: string; bankAccount: bankAcc; hobbies: string[] } = {
	name: 'test',
	bankAccount: bankAccount,
	hobbies: [ 'Sports', 'Cooking' ]
};

myself.bankAccount.deposit(3000);
console.log(myself);
