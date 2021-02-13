import { myTest } from "../../utils";

interface SingleNode {
  id: number;
  name: string;
  pId: number;
  children?: SingleNode[];
}

const nodes: SingleNode[] = [
  { id: 4, name: "4", pId: 2 },
  { id: 2, name: "2", pId: 0 },
  { id: 8, name: "8", pId: 4 },
  { id: 12, name: "12", pId: 2 },
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

function mount(nodes: SingleNode[]) {
  if (nodes.length === 0) return {};

  // 缓存全部cache，顺便找到根节点root
  const cache: { [x: string]: SingleNode } = {};
  let root;
  nodes.forEach((n) => {
    cache[n.id] = n;
    if (n.pId === 0) root = n;
  });

  // 挂载节点
  for (let i = 0; i < nodes.length; i++) {
    const current = nodes[i];
    if (current === root) continue;

    const parent = cache[current.pId];

    if (parent.children) parent.children.push(current);
    else parent.children = [current];

    cache[current.id] = current;
  }

  return root;
}

myTest(mount(nodes), expect);
