import { TreeNode } from "./94";

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
