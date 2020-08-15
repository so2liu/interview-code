import { myTest } from "../utils";

function getType(x: any) {
  const typeofType = typeof x;
  if (typeofType !== "object") return typeofType;

  return Object.prototype.toString
    .apply(x)
    .split(" ")[1]
    .replace("]", "")
    .toLowerCase();
}

myTest(getType(null), "null", "null");
myTest(getType(""), "string");
myTest(getType(0), "number");
myTest(getType(true), "boolean");
myTest(getType([]), "array");
myTest(getType({}), "object");
myTest(getType(new Date()), "date");
myTest(getType(BigInt(0)), "bigint");

// Object;
// Function;
// Boolean;
// Symbol;
// Number;
// BigInt;
// Math;
// Date;
// String;
// RegExp;
