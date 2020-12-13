const assert = require("assert");
const { one } = require("./one");
const { two } = require("./two");
const { inputOne } = require("./input-01");

describe("Part One", () => {
  it("should return 514579 with input", () => {
    const input = `1721
      979
      366
      299
      675
      1456`;
    assert.strictEqual(one(input), 514579);
  });
});

describe("Part Two", () => {
  it("should return 241861950 with input", () => {
    const input = `1721
      979
      366
      299
      675
      1456`;
    assert.strictEqual(two(input), 241861950);
  });
});
