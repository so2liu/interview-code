import { myTest, buildBinaryTree, TreeNode } from "../../utils";

const input = [1, null, 2, 3];

const tree = buildBinaryTree(input);
console.log(tree);

function traversalPreorder(root: TreeNode | null): number[] {
  if (!root) return [];

  let stack: TreeNode[] = [root];
  let output: number[] = [];

  while (stack.length > 0) {
    const root = stack.pop();
    if (!root) break;

    output.push(root.val);
    if (root.right) stack.push(root.right);
    if (root.left) stack.push(root.left);
  }

  return output;
}

function traversalPreorderRecursive(
  root: TreeNode | undefined | null
): number[] {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  return [
    root.val,
    ...traversalPreorderRecursive(root.left),
    ...traversalPreorderRecursive(root.right),
  ];
}

myTest(traversalPreorder(tree), [1, 2, 3]);
myTest(traversalPreorderRecursive(tree), [1, 2, 3]);
const tree2 = buildBinaryTree([3, 1, 2]);
console.log(tree2);
myTest(traversalPreorder(tree2), [3, 1, 2]);
myTest(traversalPreorderRecursive(tree2), [3, 1, 2]);
