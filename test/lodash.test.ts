import { _ } from "../src";

const testDataObject = {
  name: "Charles",
  age: 28
};

const testArray = [testDataObject, { name: "Not Charles", age: 27 }];

describe("Lodash like functions", () => {
  it("get", () => {
    expect(_.get(testDataObject, "age")).toBe(testDataObject.age);
    expect(_.get(testDataObject, "age[0]")).toBeUndefined();
    expect(_.get(testArray, "[1].name")).toBe("Not Charles");
  });

  it("path", () => {});
});
