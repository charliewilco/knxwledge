import { LinkedList } from "../src/linked-list";

describe("Linked List", () => {
  it("has size", () => {
    var linkedList = new LinkedList<number>(1);

    linkedList.addToTail(2);
    linkedList.addToTail(3);

    console.log(linkedList);

    expect(linkedList.getByIndex(1)).toEqual(3);
  });
});
