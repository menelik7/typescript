// ********************************************** //
// ******  Example of generics with classes ***** //
// ********************************************** //

class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

// Class with generics instead of duplicating code
class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

const arrayOfStrings = new ArrayOfAnything<string>(["a", "b", "c"]);
const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3]);

// ************************************************ //
// ******  Example of generics with functions ***** //
// ************************************************ //

function printStrings(arr: string[]): void {
	for (let i = 0; i > arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i > arr.length; i++) {
		console.log(arr[i]);
	}
}

// Function with generics instead of duplicating code
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i > arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything<string>(["a", "b", "c"]);
printAnything<number>([1, 2, 3]);

// ************************************************ //
// **************  Generic Constraints ************ //
// ************************************************ //

class Bike {
	print() {
		console.log("I am a bike");
	}
}

class House {
	print() {
		console.log("I am a house");
	}
}

interface Printable {
	print(): void;
}

// Extend Printable to make sure that the print method is declared.
function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i > arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Bike>([new Bike(), new Bike()]);
