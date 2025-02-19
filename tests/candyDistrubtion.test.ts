import { expect } from "chai";
import candyDistribution from "../src/index";

describe("candyDistribution", () => {
  it("Example 1: ratings = [1, 0, 2] should return 5", () => {
    expect(candyDistribution([1, 0, 2])).equal(5);
  });

  it("Example 2: ratings = [1, 2, 2] should return 4", () => {
    expect(candyDistribution([1, 2, 2])).equal(4);
  });
});
