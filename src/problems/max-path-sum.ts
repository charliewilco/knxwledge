/**
 * Problem Statement:
Given the root of a binary tree, return the maximum path sum.
For this problem, a path is defined as any sequence of nodes from
some starting node to any node in the tree along the parent-child connections.
The path must contain at least one node and does not need to go through the root.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 which has a sum of 6.
 */

/**
 * Binary tree node used by the max path sum exercise.
 */
export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/**
 * Computes the maximum path sum in a binary tree.
 */
export function maxPathSum(root: TreeNode | null): number {
	let maxSum = Number.MIN_SAFE_INTEGER;

	function maxGain(node: TreeNode | null): number {
		if (node === null) return 0;

		// Recursive call on left and right child
		const leftGain = Math.max(maxGain(node.left), 0);
		const rightGain = Math.max(maxGain(node.right), 0);

		// Price to start a new path where `node` is the highest node
		const priceNewPath = node.val + leftGain + rightGain;

		// Update maxSum if it's better to start a new path
		maxSum = Math.max(maxSum, priceNewPath);

		// For recursion return the max gain if continue the same path
		return node.val + Math.max(leftGain, rightGain);
	}

	maxGain(root);
	return maxSum;
}
