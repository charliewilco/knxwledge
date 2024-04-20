import { describe, expect, test } from "bun:test";
import { TreeNode, maxPathSum } from "./max-path-sum";

describe("maxPathSum", () => {
	test("calculates maximum path sum in a simple binary tree", () => {
		const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
		expect(maxPathSum(root)).toEqual(6);
	});

	test("calculates maximum path sum with negative values", () => {
		const root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
		expect(maxPathSum(root)).toEqual(42); // The path 15 -> 20 -> 7
	});

	test("handles tree with only one node", () => {
		const root = new TreeNode(1);
		expect(maxPathSum(root)).toEqual(1);
	});

	test("handles tree where all nodes are negative", () => {
		const root = new TreeNode(-2, new TreeNode(-1), new TreeNode(-3));
		expect(maxPathSum(root)).toEqual(-1);
	});
});
