
function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (!root) return false;

  if (root.left || root.right)
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );

  return sum - root.val === 0;
}
