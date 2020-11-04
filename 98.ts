/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  return isValidBSTWithThreshold(root, Infinity, -Infinity);
}

function isValidBSTWithThreshold(
  root: TreeNode | null,
  max: number,
  min: number
): boolean {
  if (!root) return true;
  if (!(root.val < max && root.val > min)) return false;

  return (
    isValidBSTWithThreshold(
      root.left,
      Math.min(max, root.val),
      min
    ) &&
    isValidBSTWithThreshold(
      root.right,
      max,
      Math.max(min, root.val)
    )
  );
}
