import { convertFalseSelfClosedTag } from "./DOM中注入html";

test("should get closed tag pair", () => {
  expect(convertFalseSelfClosedTag("<a/>")).toBe("<a></a>");
});

test("should not change for self closed tag", () => {
  expect(convertFalseSelfClosedTag("<br />")).toBe("<br />");
});
