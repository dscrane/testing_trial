const assert = require("assert");
const { forEach, map } = require("./hidash");

// simple hand made testing suite
const test = (desc, fn) => {
  console.log("---", desc);
  try {
    fn();
  } catch (err) {
    console.log(err);
  }
};

test("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6);
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepStrictEqual(result, [2, 4, 6]);

  /*   assert.strictEqual(result[0], 2);
  assert.strictEqual(result[1], 4);
  assert.strictEqual(result[2], 6); */
});

// For use with mocha
/* 
  it("The forEach function", () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
      sum += value;
    });

    assert.strictEqual(sum, 6);
  });

  it("The map function", () => {
    const result = map([1, 2, 3], (value) => {
      return value * 2;
    });

    assert.deepStrictEqual(result, [2, 4, 6]);
  }); 
*/
