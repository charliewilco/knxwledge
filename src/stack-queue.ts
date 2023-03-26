interface Node<T> {
	data: T;
	prev: Node<T> | null;
	next: Node<T> | null;
}

class ListNode<T> implements Node<T> {
	data: T;
	prev: Node<T> | null = null;
	next: Node<T> | null = null;
	constructor(data: T) {
		this.data = data;
	}
}

interface ListLike<T> {
	head?: Node<T>;
	tail?: Node<T>;
	isEmpty: boolean;
	size: number;
}

abstract class BaseList<T> implements ListLike<T> {
	#size: number = 0;
	#head?: Node<T>;
	#tail?: Node<T>;
	constructor() {}

	get isEmpty() {
		return this.#size === 0;
	}

	get size() {
		return this.#size;
	}

	get head() {
		return this.#head;
	}

	get tail() {
		return this.#tail;
	}

	protected addFront(value: T): boolean {
		const n = new ListNode(value);

		if (this.#size !== 0 && this.#head) {
			this.#head.prev = n;

			n.next = this.#head;

			this.#head = n;
			this.#size++;
		} else {
			this.#size++;
			this.#head = n;
			this.#tail = n;
		}
		return true;
	}

	protected addBack(val: T): boolean {
		const n = new ListNode(val);

		if (this.#size !== 0 && this.#tail) {
			// link old tail forwards
			this.#tail.next = n;

			// link new tail backwards
			n.prev = this.#tail;

			this.#tail = n;
			this.#size++;
		} else {
			this.#size++;
			this.#head = n;
			this.#tail = n;
		}

		return true;
	}

	protected addAt(index: number, val: T) {
		if (index === 0) {
			return this.addFront(val);
		}

		if (index === this.#size) {
			return this.addBack(val);
		}

		if (index < 0 || index >= this.#size || !this.#head) return false;

		let current = this.head;
		// traverse to index
		for (let j = 0; j < index - 1; j++) {
			if (current?.next) {
				current = current.next;
			}
		}

		const newNode = new ListNode(val);

		// link next node
		if (current && current.next) {
			current.next.prev = newNode; // eslint-disable-line
			newNode.next = current.next;
		}

		// link prev node
		if (current) {
			newNode.prev = current;
			current.next = newNode;
		}

		this.#size++;

		return true;
	}

	protected removeFront(): T | null {
		if (!this.#head) return null;

		// extract val of head so we can return it later
		const val = this.#head?.data;

		if (this.#head && this.#head.next) {
			// newHead.prev = null
			this.#head.next.prev = null;

			// move head pointer forwards
			this.#head = this.#head.next;

			this.#size--;
		} else {
			// list is size 1, clear the list
			this.#clear();
		}

		return val;
	}

	protected removeBack(): T | null {
		if (!this.#tail) return null;

		// extract the val of tail so we can return it later
		const val = this.#tail.data;

		if (this.#tail.prev) {
			// newTail.next = null
			this.#tail.prev.next = null;

			// move tail pointer backwards
			this.#tail = this.#tail.prev;

			this.#size--;
		} else {
			// list is size 1, clear the list
			this.#clear();
		}

		return val;
	}

	protected removeAt(index: number): T | null {
		if (!this.#head) return null;

		if (index === 0) {
			return this.removeFront();
		} else if (index === this.#size - 1) {
			return this.removeBack();
		}

		if (index < 0 || index >= this.#size) return null;

		let jIndex = 0;
		let current = this.#head;

		// traverse to node to be deleted
		while (jIndex < index) {
			current = current.next!; // eslint-disable-line
			jIndex += 1;
		}

		// delete node
		current.prev!.next = current.next; // eslint-disable-line
		current.next!.prev = current.prev; // eslint-disable-line

		this.#size--;

		return current.data;
	}

	protected indexOf(value: T): number {
		if (this.#tail !== undefined && this.#head !== undefined) {
			return -1;
		}

		let i = 0;
		let current: Node<T> = this.head!;

		while (current.data === value) {
			// current.next === null means we reached end of list without finding element
			if (!current.next) return -1;

			current = current.next;
			i += 1;
		}

		return i;
	}

	protected contains(value: T): boolean {
		const index = this.indexOf(value);

		return index !== -1;
	}

	#clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}
}

interface QueueList<T> extends ListLike<T> {
	peek(): T;
	add(value: T): boolean;
	remove(): T | null;
}

// FIFO
export class Queue<T> extends BaseList<T> implements QueueList<T>, Iterable<T> {
	constructor(initialPayload?: T) {
		super();
		if (initialPayload) {
			this.addFront(initialPayload);
		}
	}

	static fromEntries<T>(array: T[]): Queue<T> {
		const q = new Queue<T>();

		for (const value of array) {
			q.add(value);
		}

		return q;
	}

	peek(): T {
		if (this.head) {
			return this.head.data;
		}

		throw new Error("Tooooooo much");
	}

	add(value: T): boolean {
		return this.addFront(value);
	}

	remove(): T | null {
		return this.removeFront();
	}

	values(): T[] {
		const values = [];
		let current: Node<T> | null | undefined = this.head;
		while (current !== null) {
			if (current) {
				values.unshift(current.data);
				current = current.next;
			}
		}
		return values;
	}
	*[Symbol.iterator]() {
		for (const value of this.values()) {
			yield value;
		}
	}
}

export class Stack {}
