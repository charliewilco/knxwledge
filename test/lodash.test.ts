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

  it("has", () => {
    expect(_.has(testDataObject, "age")).toBeTruthy();
  });

  it("path", () => {
    expect(_.getPath("[1][0][2].name")).toStrictEqual(["1", "0", "2", "name"]);
    expect(_.getPath("[1].name")).toStrictEqual(["1", "name"]);
  });
});
