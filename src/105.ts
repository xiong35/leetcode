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

function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length == 0) return null;

  var rootVal = preorder[0];
  var root = new TreeNode(rootVal);
  var rootInd = inorder.indexOf(rootVal);

  var leftVals = inorder.slice(0, rootInd);
  var rightVals = inorder.slice(rootInd + 1);

  root.left = buildTree(
    preorder.slice(1, leftVals.length + 1),
    leftVals
  );
  root.right = buildTree(
    preorder.slice(leftVals.length + 1),
    rightVals
  );

  return root;
}
