import { myTest, TreeNode, buildBinaryTree } from "../../utils";

function inorderTraversalRecursive(root: TreeNode | null): number[] {
  if (!root) return [];
  if (root.left === null && root.right === null) return [root.val];

  return [
    ...inorderTraversalRecursive(root.left),
    root.val,
    ...inorderTraversalRecursive(root.right),
  ];
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  const output: number[] = [];
  let current: TreeNode = root;

  while (stack.length > 0 || current !== null) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    output.push(current.val);
    current = current.right;
  }
  return output;
}

const tree = buildBinaryTree([1, null, 2, 3]);
myTest(inorderTraversalRecursive(tree), [1, 3, 2]);
myTest(inorderTraversal(tree), [1, 3, 2]);
