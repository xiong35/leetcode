namespace T1448 {
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

  function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return goodNodes_(root, root.val) + 1;
  }

  function goodNodes_(root: TreeNode | null, max: number): number {
    if (!root) return 0;

    let num = 0;

    if (root.left) {
      if (root.left.val >= max) {
        num++;
        num += goodNodes_(root.left, root.left.val);
      } else {
        num += goodNodes_(root.left, max);
      }
    }
    if (root.right) {
      if (root.right.val >= max) {
        num++;
        num += goodNodes_(root.right, root.right.val);
      } else {
        num += goodNodes_(root.right, max);
      }
    }

    return num;
  }
}
