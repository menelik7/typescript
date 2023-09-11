import "reflect-metadata";

// const plane = {
// 	color: "red",
// };

// // Reflect.defineMetadata("note", "Hi there", plane);
// // Reflect.defineMetadata("height", 10, plane);

// // const note = Reflect.getMetadata("note", plane);
// // const height = Reflect.getMetadata("height", plane);

// // console.log(note); // Hi there
// // console.log(height); // 10

// Reflect.defineMetadata("note", "Bye there", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");

// console.log(note); // Bye there

@controller
class Plane {
	color: string = "red";

	@get("/login")
	fly(): void {
		console.log("Vrrrrrrrr");
	}
}

function get(path: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata("path", path, target, key);
	};
}

function controller(target: typeof Plane) {
	for (let key in target.prototype) {
		const path = Reflect.getMetadata("path", target.prototype, key);

		console.log(path); // /login
	}
}
