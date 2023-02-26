class TreeNode<T> {
	public value: T;
	public left: TreeNode<T> | null = null;
	public right: TreeNode<T> | null = null;
	constructor(val: T) {
		this.value = val;
	}

	get isLeaf(): boolean {
		return !!this.left && !!this.right;
	}
}

export class BinarySearchTree<T> {
	private _size: number = 0;
	public root: TreeNode<T>;

	constructor(value: T) {
		this.root = new TreeNode(value);
		this._size++;
	}

	get size(): number {
		return this._size;
	}

	public insert(value: T) {
		this._size++;

		let n = new TreeNode(value);

		function searchTree(node: TreeNode<T> | null) {
			if (value < node.value) {
				if (!node.left) {
					node.left = n;
				} else {
					searchTree(node.left);
				}
			} else if (value > node.value) {
				if (!node.right) {
					node.right = n;
				} else {
					searchTree(node.right);
				}
			}
		}

		searchTree(this.root);
	}

	public min(): T {
		let current = this.root;

		while (current.left) {
			current = current.left;
		}
		return current.value;
	}

	public max(): T {
		let current = this.root;

		while (current.right) {
			current = current.right;
		}

		return current.value;
	}

	public contains(value: T): boolean {
		let current = this.root;
		while (current) {
			if (value === current.value) {
				return true;
			}

			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return false;
	}

	public depthFirstSearchInOrder() {
		let result: T[] = [];

		function traverse(node: TreeNode<T>) {
			if (node.left) {
				traverse(node.left);
			}

			result.push(node.value);

			if (node.right) {
				traverse(node.right);
			}
		}

		traverse(this.root);
		return result;
	}

	public depthFirstSearchPreOrder() {
		let result: T[] = [];

		function traverse(node: TreeNode<T>) {
			result.push(node.value);

			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);
		}

		traverse(this.root);
		return result;
	}

	public depthFirstSearchPostOrder() {
		let result: T[] = [];

		function traverse(node: TreeNode<T>) {
			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);

			result.push(node.value);
		}

		traverse(this.root);

		return result;
	}

	public bredthFirstSearch() {
		let result: T[] = [];
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			let current = queue.shift();
			result.push(current.value);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}

		return result;
	}
}
