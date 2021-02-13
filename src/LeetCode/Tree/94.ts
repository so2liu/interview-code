export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

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
  let current: TreeNode | undefined = root;

  while (stack.length > 0 || current !== null) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (!current) continue;
    output.push(current.val);
    current = current.right;
  }
  return output;
}
