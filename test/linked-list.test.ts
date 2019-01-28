import { LinkedList, ListNode } from "../src/linked-list";

var linkedList = new LinkedList<number>(1);

linkedList.addToTail(2);
linkedList.addToTail(3);

describe("Linked List", () => {
  it("has index", () => {
    const n: ListNode<number> = linkedList.getByIndex(1);

    expect(n.payload).toEqual(2);
  });

  it("has size", () => {
    const size = linkedList.size();

    expect(size).toEqual(3);
  });
});
