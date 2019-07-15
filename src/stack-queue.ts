export class Node<T> {
  constructor(data: T) {
    this.data = data;
  }
  public data: T;
  public next: Node<T> | null;
}

// FIFO
export class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number;

  constructor(initialPayload?: T) {
    if (initialPayload) this.head = new Node(initialPayload);
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public peek(): T {
    if (this.head !== null) {
      console.log(this.head);

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
export class Stack<T> {
  constructor(data: T) {
    this.head = new Node(data);
  }
  private head: Node<T> | null;
  private tail: Node<T> | null;
}
