import { describe, expect, test } from "bun:test";
import { StoreData } from "./store-change";

describe("StoreData", () => {
	test("add key/value pair", () => {
		let store = new StoreData();
		store.add("name", "joe");
		store.add("age", 30);
		expect(store.has("age")).toEqual(true);
		expect(store.has("animal")).toEqual(false);
	});

	test("listen to value changes for keys", () => {
		let store = new StoreData();
		store.add("name", "emma");
		store.on("change:name", (prev, next, key) => {
			expect(prev).toEqual("emma");
			expect(next).toEqual("john");
			expect(key).toEqual("name");
		});
		store.add("name", "john");
		store.add("age", 30);
		store.on("age", (prev, next, key) => {
			expect(prev).toEqual(30);
			expect(next).toEqual(26);
			expect(key).toEqual("age");
		});
		store.add("age", 26);
		// store.on("change:age", (prev, next, key) => {
		// 	expect(prev).toEqual(26);
		// 	expect(next).toEqual(28);
		// 	expect(key).toEqual("age");
		// });
		// store.add("age", 28);
		// store.add("age", 45);
	});
});
