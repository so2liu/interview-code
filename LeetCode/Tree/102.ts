import { TreeNode, buildBinaryTree, myTest } from "../../utils";

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
      output[level].push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }

  return output;
}

const tree = buildBinaryTree([3, 9, 20, null, null, 15, 7]);
myTest(levelOrder(tree), [[3], [9, 20], [15, 7]]);
