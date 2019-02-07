export class Node<T> {
  constructor(data: T) {
    this.data = data;
  }
  public data: T;
  public next: Node<T> | null;
}

// FIFO
export class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor(initialPayload?: T) {
    if (initialPayload) {
      this.head = new Node(initialPayload);
    }
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public peek() {
    if (this.head !== null) {
      return this.head.data;
    }
    throw new Error("Tooooooo much");
  }

  public add(value: T): void {
    const n = new Node(value);
    if (this.isEmpty()) {
      this.head = n;
    }

    if (this.tail !== null) {
      this.tail.next = n;
    }
    this.tail = n;
  }

  public remove() {
    const data = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return data;
  }
}

// LIFO
export class Stack<T> {
  constructor(data: T) {
    this.head = new Node(data);
  }
  private head: Node<T> | null;
  private tail: Node<T> | null;
}
