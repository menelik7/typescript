import "reflect-metadata";
import { Methods } from "./Methods";

export function routeFinder(method: string) {
	return function (path: string) {
		return function (target: any, key: string, desc: PropertyDescriptor) {
			Reflect.defineMetadata("path", path, target, key);
			Reflect.defineMetadata("method", method, target, key);
		};
	};
}

export const get = routeFinder(Methods.get);
export const put = routeFinder(Methods.put);
export const post = routeFinder(Methods.post);
export const del = routeFinder(Methods.del);
export const patch = routeFinder(Methods.patch);
