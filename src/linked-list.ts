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

  public getByIndex(idx: number): ListNode<T> {
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

interface INode<T> {
  next: INode<T> | null;
  payload: T;
}

export class ListNode<T> implements INode<T> {
  constructor(payload: T) {
    this.payload = payload;
    this.next = null;
  }

  public next: INode<T> | null;

  public payload: T;
}
