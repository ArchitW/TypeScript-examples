"use strict";
/*
tsc --init // compile all ts files to js
ts config:
----------
sourceMap [default:false] : .ts files are seraved on server, used for debugging
noImplicitAny[default:false] :
strictNullChecks : scan files to check if variables are Null, useful if we forget to ini variables
noUnusedParameters[default:false] : check if params are used <declared but never used>
*/
//Strings
var strings = 'this is string';
//numbers
var numbers = 12;
//booleans
var bools = true;
//array
var arrayOfNumbers = [10, 20, 30, 40];
var arrayOfStrings = ['aa', 'aaa', 'aaaa'];
var arrayOfStrings2;
var arrayOfAnything = [1, '1', 'aa', '2'];
//tuples
var address = ['my string', 100]; //note order is important
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Orange"] = 1] = "Orange";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
console.log(Color.Red, Color.Orange, Color.Green, Color.Blue, Color.Black);
var myColor = Color.Green;
console.log(myColor);
//any : careful with any, try to avoid it, gives up all the advantages TS offers
var car = 'BMW';
//functions
// u can provide return type [void, number, string, boolean]
function returnMyName() {
    var name = 'test';
    return name;
}
console.log(returnMyName());
function returnVoid() {
    console.log('this function has no return');
}
//argument type
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(10, 2));
//function types, calling
var sayH;
sayH = returnVoid; // assigning function
console.log(sayH);
sayH(); // executing a function, note()
var myMultiply; // name does not matter, type matter
myMultiply = multiply;
console.log(myMultiply(10, 20));
//objects
var obj = {
    name: 'user',
    age: 20
};
// you can not assign obj with different keys obj = {} will throw error.
// in function order is important.
// in objects keys are important.
//complex object
var complexObj = {
    data: [10, 20, 30, 40],
    output: function (all) {
        console.log(all);
        return this.data;
    }
};
console.log(complexObj, complexObj.data, complexObj.output(false));
var complexObjCopy;
// if you are not sure about the type ex: if u know type might be number and string but not bool
// union types
var age; // might be 27 or '27' , you may chain more than 2 types
//how to check types
var finalValue = 'its a string';
if (typeof finalValue === 'string') {
    console.log('yeah this is a string');
}
//never
function neverReturns() {
    // why? this function not returning anything, thats why no void
    throw new Error('An Error');
}
//Nullable types
// all un-initialized variables are undefined
var canBeNull;
canBeNull = null;
canBeNull = 10; // this will throw error if only type used is null, use union types
var canThisBeAny = null;
canThisBeAny = 10;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'test',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
