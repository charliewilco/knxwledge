import { describe, expect, test } from "@jest/globals";
import { BinarySearchTree } from "./binary-search-tree.ts";

const bst = new BinarySearchTree<number>(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

describe("Binary Search Tree", () => {
	test("has a size", () => {
		expect(bst.size).toEqual(7);
	});

	test("can print by depth", () => {
		expect(bst.depthFirstSearchInOrder()).toEqual([2, 3, 12, 15, 28, 36, 39]);
		expect(bst.depthFirstSearchPreOrder()).toEqual([15, 3, 2, 12, 36, 28, 39]);
		expect(bst.depthFirstSearchPostOrder()).toEqual([2, 12, 3, 28, 39, 36, 15]);
	});

	test("can print out by level", () => {
		expect(bst.bredthFirstSearch()).toEqual([15, 3, 36, 2, 12, 28, 39]);
	});

	test("can find items in the tree", () => {
		expect(bst.contains(4)).toBeFalsy();
		expect(bst.contains(39)).toBeTruthy();
	});

	test("can tell the biggest and the smallest", () => {
		expect(bst.min()).toEqual(2);
		expect(bst.max()).toEqual(39);
	});
});
