const assert = require("assert");
const { one } = require("./one");

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
