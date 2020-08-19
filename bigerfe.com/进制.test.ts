import letterTransform from "./进制";

test("AA should get 27", () => {
  expect(letterTransform("AA")).toBe(27);
});

test("ZY should get 701", () => {
  expect(letterTransform("ZY")).toBe(701);
});

test("ZZY should get 26*26+26+1", () => {
  expect(letterTransform("AAA")).toBe(26 * 26 + 26 + 1);
});
