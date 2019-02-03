export class TreeNode<T> {
  constructor(payload: T) {
    this.head = payload;
  }
  public readonly head: T;
}
