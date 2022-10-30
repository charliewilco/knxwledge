import { _ } from "../src";

const testDataObject = {
  name: "Charles",
  age: 28
};

const testArray = [testDataObject, { name: "Not Charles", age: 27 }];

describe("Lodash like functions", () => {
  test("get", () => {
    expect(_.get(testDataObject, "age")).toBe(testDataObject.age);
    expect(_.get(testDataObject, "age[0]")).toBeUndefined();
    expect(_.get(testArray, "[1].name")).toBe("Not Charles");
  });

  test("has", () => {
    expect(_.has(testDataObject, "age")).toBeTruthy();
  });

  test("path", () => {
    expect(_.getPath("[1][0][2].name")).toStrictEqual(["1", "0", "2", "name"]);
    expect(_.getPath("[1].name")).toStrictEqual(["1", "name"]);
  });
});
