interface TreeLike<T> {
	root: T;
	left: TreeLike<T> | null;
	right: TreeLike<T> | null;
}

/**
 * Binary search tree-like structure with insert/contains helpers.
 */
export class Tree<T> implements TreeLike<T> {
	constructor(payload: T) {
		this.root = payload;
		this.left = null;
		this.right = null;
	}

	public root: T;
	public left: Tree<T> | null;
	public right: Tree<T> | null;

	/**
	 * Inserts a value into the tree based on comparisons.
	 */
	public insert(value: T): void {
		if (value < this.root) {
			if (this.left === null) {
				this.left = new Tree<T>(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new Tree<T>(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	/**
	 * Returns true if the value exists in the tree.
	 */
	public contains(value: T): boolean {
		if (value === this.root) {
			return true;
		}
		if (value < this.root) {
			if (this.left === null) {
				return false;
			}
			return this.left.contains(value);
		}
		if (this.right === null) {
			return false;
		}
		return this.right.contains(value);
	}

	/**
	 * In-order traversal (left -> right). No-op for values.
	 */
	public logInOrder(): void {
		if (this.left !== null) {
			this.left.logInOrder();
		}

		if (this.right !== null) {
			this.right.logInOrder();
		}
	}
}
