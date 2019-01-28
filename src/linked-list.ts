export class LinkedList<T> {
  constructor(payload?: T) {
    if (payload) {
      this.first = new ListNode(payload);
    } else {
      this.first = null;
    }
  }

  private first?: ListNode<T>;

  private getLastNode(): ListNode<T> | null {
    if (this.first === null) {
      return null;
    }

    let current: ListNode<T> = this.first;

    if (current.next) {
      while (current.next !== null) {
        current = current.next;
      }
    }

    return current;
  }

  public size(): number {
    if (this.first === null) {
      return 0;
    }

    let current: ListNode<T> = this.first;
    let count: number = 0;

    if (current.next) {
      while (current.next !== null) {
        current = current.next;
        count++;
      }
    }

    return count;
  }

  public addToTail(payload: T) {
    if (this.first) {
      const last: ListNode<T> = this.getLastNode();

      last.next = new ListNode(payload);
    } else {
      this.first = new ListNode(payload);
    }
  }

  public getByIndex(idx: number): ListNode<T> | Error {
    if (idx >= this.size()) {
      return new Error("Tooooooo much");
    }
    if (this.first !== null) {
      let current: ListNode<T> = this.first;
      let count: number = 0;

      while (current.next !== null && count !== idx) {
        current = current.next;
        count++;
      }

      return current;
    }
  }
}

export class ListNode<T> {
  constructor(payload: T) {
    this.payload = payload;
  }

  public next: ListNode<T>;

  public payload: T;
}
