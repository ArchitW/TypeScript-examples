"use strict";
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
var arrayOfNumbers = [10, 20, 30, 40];
var arrayOfStrings = ['aa', 'aaa', 'aaaa'];
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
sayH = returnVoid;
console.log(sayH);
sayH();
var myMultiply; // name does not matter, type matter
myMultiply = multiply;
console.log(myMultiply(10, 20));
//objects
var obj = {
    name: 'user',
    age: 20
};
// you can not assign obj with different keys obj = {} will throw error.
// in function order if important.
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
