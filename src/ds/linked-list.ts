// https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54

export class LinkedList<T> {
	constructor(payload?: T) {
		if (payload) {
			this.head = new ListNode(payload);
		} else {
			this.head = null;
		}
	}

	private head: ListNode<T> | null;

	private getLastNode(): ListNode<T> | null {
		if (this.head === null) {
			return null;
		}

		let current: ListNode<T> = this.head;

		while (current.next !== null) {
			current = current.next;
		}

		return current;
	}

	public size(): number {
		let count: number = 0;

		if (this.head === null) {
			return 0;
		}

		let current: ListNode<T> = this.head;
		count++;

		while (current.next !== null) {
			current = current.next;
			count++;
		}

		return count;
	}

	public addToTail(payload: T) {
		if (this.head !== null) {
			const last: ListNode<T> = this.getLastNode();

			last.next = new ListNode(payload);
		} else {
			this.head = new ListNode(payload);
		}
	}

	// biome-ignore lint/suspicious/noConfusingVoidType: Not all paths return a value
	public getByIndex(idx: number): ListNode<T> | void {
		if (idx >= this.size()) {
			throw new Error("Tooooooo much");
		}

		if (this.head !== null) {
			let current: ListNode<T> = this.head;
			let count: number = 0;

			while (current.next !== null && count !== idx) {
				current = current.next;
				count++;
			}

			return current;
		}
	}
}

interface Node<T> {
	next: Node<T> | null;
	payload: T;
}

export class ListNode<T> implements Node<T> {
	constructor(payload: T) {
		this.payload = payload;
		this.next = null;
	}

	public next: Node<T> | null;

	public payload: T;
}
