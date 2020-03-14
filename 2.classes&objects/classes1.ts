console.log('CLASSES------------------');

// same as es6
class Person {
	name: string;
	private type: string | null; //Property 'type' has no initializer and is not definitely assigned in the constructor.
	protected age: number = 44;

	constructor(name: string, public username: string) {
		this.name = name;
		this.type = '';
	}

	printAge() {
		console.log(this.age);
		this.setType('xxx_0_xxx');
	}
	private setType(type: string) {
		this.type = type;
		console.log(this.type);
	}
}
// Inheritance

class TestUser extends Person {
	// u can inherit anything from base class, except private.
	constructor(username: string) {
		super('max', username); // calls constructor of parent class
		this.age = 90; // age is protected thats why can use
	}
}

const person = new Person('test', 'test_user');
console.log(person.name, person.username);
//person.setType('XXXX'); // wot work with private method
person.printAge();

const tu = new TestUser('2nd argument'); // name wil not going to get over-ride.
console.log(tu.name, tu.username);
tu.printAge();

//Getters and Setters
class Plant {
	private _species: string = 'default';

	//set like method, call like property
	set species(value: string) {
		if (value.length > 3) {
			this._species = value;
		}
	}
	get species() {
		return this._species;
	}
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'Test';
console.log(plant.species);

// static properties and methods
class Helpers {
	static PI: number = 3.14;
	static radius(r: number): number {
		return this.PI * r * r;
	}
}
// You dont have to instantiate class to access static method or variable
console.log(Helpers.PI);
console.log(Helpers.radius(10));

//Abstract classes : needs to be extended.
// we only define and never implement logic.
abstract class Project {
	projectName: string = 'default';
	budget: number = 10000;
	abstract changeName(name: string): string;
	calcBudget() {
		return this.budget * 2;
	}
}
class ITProject extends Project {
	changeName(name: string): string {
		return `New Project ${name}`;
	}
}
let itp = new ITProject();
console.log(itp.projectName, itp.changeName('TEST'), itp.budget);
