import { TreeNode } from "./94";

function levelOrder(root: TreeNode | null): number[][] {
  const output: number[][] = [];
  if (!root) return output;

  let level = 0;
  const queue = [root];

  while (queue.length > 0) {
    output.push([]);

    const queueLength = queue.length;
    for (let index = 0; index < queueLength; index++) {
      const node = queue.shift();
      if (!node) continue;
      output[level].push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }

  return output;
}
