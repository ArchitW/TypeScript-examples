"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('CLASSES------------------');
// same as es6
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 44;
        this.name = name;
        this.type = '';
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('xxx_0_xxx');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// Inheritance
var TestUser = /** @class */ (function (_super) {
    __extends(TestUser, _super);
    // u can inherit anything from base class, except private.
    function TestUser(username) {
        var _this = _super.call(this, 'max', username) || this;
        _this.age = 90; // age is protected thats why can use
        return _this;
    }
    return TestUser;
}(Person));
var person = new Person('test', 'test_user');
console.log(person.name, person.username);
//person.setType('XXXX'); // wot work with private method
person.printAge();
var tu = new TestUser('2nd argument'); // name wil not going to get over-ride.
console.log(tu.name, tu.username);
tu.printAge();
//Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        //set like method, call like property
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Test';
console.log(plant.species);
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.radius = function (r) {
        return this.PI * r * r;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// You dont have to instantiate class to access static method or variable
console.log(Helpers.PI);
console.log(Helpers.radius(10));
//Abstract classes : needs to be extended.
// we only define and never implement logic.
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
        this.budget = 10000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        return "New Project " + name;
    };
    return ITProject;
}(Project));
var itp = new ITProject();
console.log(itp.projectName, itp.changeName('TEST'), itp.budget);
