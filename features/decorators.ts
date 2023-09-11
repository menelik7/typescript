@classDecorator
class Boat {
	@testDecorator
	color: string = "red";

	@testDecorator
	get formattedColor(): string {
		return `This boats color is ${this.color}`;
	}

	@logError("Oops!!!  Boat was sunk in ocean.")
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator generateWake: boolean
	): void {
		if (speed === "fast") {
			console.log("Swish!!!");
		} else {
			console.log("Blah");
		}
		throw new Error();
	}
}

function classDecorator(constructor: typeof Boat) {
	console.log("Class decorator", constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log("Parameter decorator", key, index);
}

function testDecorator(target: any, key: string) {
	console.log("Test decorator", key);
}

function logError(errorMessage: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value;

		desc.value = function () {
			try {
				method();
			} catch (err) {
				console.log("Log error", errorMessage);
			}
		};
	};
}

// new Boat().pilot("fast", true);
