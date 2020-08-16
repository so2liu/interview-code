import { buildBinaryTree, TreeNode, myTest } from "../../utils";

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  let current = root;
  const output: number[] = [];

  while (stack.length > 0 || current !== null) {
    while (current) {
      if (current.right) stack.push(current.right);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    if (stack.length > 0 && current.right === stack[stack.length - 1]) {
      stack[stack.length - 1] = current;
      current = current.right;
    } else {
      output.push(current.val);
      current = null;
    }
  }
  return output;
}

function postOrderTraversalRecursive(root: TreeNode | null): number[] {
  if (!root) return [];

  if (!root.left && !root.right) return [root.val];

  return [
    ...postOrderTraversalRecursive(root.left),
    ...postOrderTraversalRecursive(root.right),
    root.val,
  ];
}

const tree = buildBinaryTree([1, null, 2, 3]);
myTest(postorderTraversal(tree), [3, 2, 1]);
myTest(postOrderTraversalRecursive(tree), [3, 2, 1]);
const tree2 = buildBinaryTree([3, 1, 2]);
myTest(postorderTraversal(tree2), [1, 2, 3]);
myTest(postOrderTraversalRecursive(tree2), [1, 2, 3]);
