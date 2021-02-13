const R = require("ramda");

R.compose(R.multiply(7), R.add(1), R.prop("amount"))({ amount: 5 }); // => 42

R.prop("x", { x: 100 }); //=> 100
R.prop("x", {}); //=> undefined
R.prop(0, [100]); //=> 100
R.compose(R.inc, R.prop("x"))({ x: 3 }); //=> 4

const start = { amount: 5 };
const result = R.compose(R.multiply(7), R.add(1), R.prop("amount"))(start); // => 42
console.log(start === result); // false
