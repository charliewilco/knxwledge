// FILO
export class Queue<T> {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  list: T[];
  length: number;

  public enqueue(value: T): void {
    this.length++;
    this.list.push(value);
  }

  public dequeue(): T | void {
    if (this.length === 0) return;

    this.length--;
    return this.list.shift();
  }

  public peek(): T {
    return this.list[0];
  }
}

// LIFO
// export class Stack<T> {}
