// (1) Using let and const instead of var

// Var has function scope, while const and let have bracket scope

const name = "React";

console.log(`A constant name is ${name}`);

if (true) {
	let anotherName = "React JS"
	console.log (anotherName);
}

// (2) Template strings
let fname = 'Ryan';
let lname = "D";
let age = 30;

result = `${fname} ${lname}'s age is ${age}`;
console.log(result);

// (3) default parameters to functions

function welcome(user = 'default user', message = 'default message') {
	console.log(`The message for ${user} is ${message}`);
}

welcome();

// (4) Arrow functions

function greeting(message) {
	console.log(`${message} everyone`);
}

greeting("Hello");

arrowgreeting = (message) => console.log(`${message} everyone`);

arrowgreeting("Hello Arrow");

const createBlog = (title, body) => {
	if (!title) {
		throw new Error("A title is required");
	}

	if (!body) {
		throw new Error("A body is required");
	}

	return (console.log(`${title} - ${body}`));
}

createBlog('A title', 'Body');

const nepal = {
	mountains: ['Everest', 'Fish Tail', 'Annapurna'],
	print: function() {
		setTimeout( () => {
			console.log(this.mountains.join(' - '));
		}, 1000);
	},
}

nepal.print();

// (5) Destructuring an object

const thingsToDo = {
	morning: 'Excercise',
	afternoon: 'Work',
	evening: 'Code',
	night: ['sleep', 'dream'],
}

const { morning, afternoon } = thingsToDo;

console.log(`Destructuring: ${morning} and ${afternoon}`);

const universityStudent = ({ name, university }) => {
	console.log(`Student is ${name}`);
}

universityStudent({
	name: 'Richard', 
	university: 'BYU'});

// (6) Destructuring an array

const [,, thirdMountain] = ['Everest', 'Fish Tail', 'Annapurna'];

console.log(thirdMountain);

// (7) Restructuring

const mtnName = 'Everest';
const height = 8848;
const output = () => {
	console.log(`Mt $this.mtnName`);
}

const anObject = {mtnName, height, output};

// (8) Spread and rest operator
// combine multiple arrays or objects into one

const mountains = ['Everest', 'Fish Tail', 'Annapurna'];
const moreMountains = ['Fuji'];

const aBigArray = [...mountains, ...moreMountains];

const day = {
	breakfast: 'toast with milk',
	lunch: 'rice with chicken',
}

const night = {
	dinner: 'steak',
}

const allMeals = {...day, ...night}

const rivers = ['Sunkoshi', 'Tamakoshi', 'Saptakoshi'];

const [first, ...rest] = rivers;

// Java Script classes
class Holiday {
	constructor(destination, days) {
		// super();
		this.destination = destination;
		this.days = days;
	}

	info() {
		console.log(`${this.destination} will take ${this.days} days.`);
	}
}

console.log(Holiday.prototype);

const trip = new Holiday("Katmandu, Nepal", 30);
console.log(trip);

class Expedition extends Holiday {
	constructor(destination, days, gear) {
		super(destination, days);

		this.gear = gear;
	}

	info() {
		super.info();
		console.log(`Gear is ${this.gear.join(" and your")}`);
	}
}