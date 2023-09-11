import "reflect-metadata";

class Practice {
	label: string = "Practice";

	@get("Monday")
	start(exerciseNumber: number, difficulty: string): void {
		const day = Reflect.getMetadata("day", Practice.prototype, "start");
		if (difficulty === "hard") {
			console.log("OMG we are in for treat on this", day);
		} else {
			console.log("Piece of cake!");
		}
	}
}

function get(day: string) {
	return function (target: Practice, key: string) {
		Reflect.defineMetadata("day", day, target, key);
	};
}

new Practice().start(3, "hard");
