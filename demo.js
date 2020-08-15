const nodes = [
  { id: 2, name: "2", pId: 0 },
  { id: 4, name: "4", pId: 2 },
  { id: 12, name: "12", pId: 2 },
  { id: 8, name: "8", pId: 4 },
  { id: 10, name: "10", pId: 4 },
];

const expect = {
  id: 2,
  name: "2",
  pId: 0,
  children: [
    {
      id: 4,
      name: "4",
      pId: 2,
      children: [
        { id: 8, name: "8", pId: 4 },
        { id: 10, name: "10", pId: 4 },
      ],
    },
    { id: 12, name: "12", pId: 2 },
  ],
};

function mount(nodes) {
  const result = nodes[0] || {};
  const cache = { [nodes[0].id]: nodes[0] };

  for (let i = 1; i < nodes.length; i++) {
    const current = nodes[i];

    const parent = cache[current.pId];
    if (parent.children) parent.children.push(current);
    else parent.children = [current];

    cache[current.id] = current;
  }
  return result;
}

myTest(mount(nodes), expect);

// test helper

function myTest(toTest, standardValue, describe = "") {
  console.log(
    `[TEST${describe ? " " + describe : ""}]`,
    JSON.stringify(test(toTest, standardValue), null, 2)
  );
}

function test(toTest, standardValue) {
  if (
    typeof toTest === "object" &&
    JSON.stringify(toTest) === JSON.stringify(standardValue)
  )
    return true;
  if (toTest === standardValue) return true;
  return toTest;
}
