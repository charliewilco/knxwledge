interface ITree<T> {
	root: T;
	left: ITree<T> | null;
	right: ITree<T> | null;
}

export class Tree<T> implements ITree<T> {
	constructor(payload: T) {
		this.root = payload;
		this.left = null;
		this.right = null;
	}

	public root: T;
	public left: Tree<T> | null;
	public right: Tree<T> | null;

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

	public contains(value: T): boolean {
		if (value === this.root) {
			return true;
		} else if (value < this.root) {
			if (this.left === null) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if (this.right === null) {
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}

	public logInOrder(): void {
		if (this.left !== null) {
			this.left.logInOrder();
		}

		if (this.right !== null) {
			this.right.logInOrder();
		}
	}
}
