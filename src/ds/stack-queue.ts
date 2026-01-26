/**
 * Singly linked list node used by stack/queue.
 */
export class Node<T> {
	constructor(data: T) {
		this.data = data;
	}
	public data: T;
	public next: Node<T> | null;
}

// FIFO
/**
 * Simple queue implementation (FIFO).
 */
export class Queue<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	private length: number;

	constructor(initialPayload?: T) {
		if (initialPayload) this.head = new Node(initialPayload);
	}

	/**
	 * Returns true when the queue is empty.
	 */
	public isEmpty(): boolean {
		return this.head === null;
	}

	/**
	 * Returns the head value without removing it.
	 */
	public peek(): T {
		if (this.head !== null) {
			return this.head.data;
		}

		throw new Error("Tooooooo much");
	}

	/**
	 * Enqueues a value to the tail.
	 */
	public add(value: T): void {
		if (this.isEmpty()) {
			this.head = new Node(value);
		}

		if (this.tail !== null) {
			this.tail.next = new Node(value);
		}
		this.tail = new Node(value);
	}

	/**
	 * Dequeues a value from the head.
	 */
	public remove(): T {
		if (this.head === null) {
			this.tail = null;
			throw new Error("Nothing to remove");
		}
		const { data, next } = this.head;

		this.head = next;

		return data;
	}
}

// LIFO
/**
 * Minimal stack implementation (LIFO).
 */
export class Stack<T> {
	constructor(data: T) {
		this.head = new Node(data);
	}
	private head: Node<T> | null;
	private tail: Node<T> | null;
}
