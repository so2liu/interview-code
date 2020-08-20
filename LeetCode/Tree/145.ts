import { TreeNode } from "./94";

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  const output: number[] = [];

  while (stack.length > 0 || current !== null) {
    while (current) {
      if (current.right) stack.push(current.right);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop() || null;
    if (!current) continue;

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
