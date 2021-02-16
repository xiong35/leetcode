function pathSum(root: TreeNode | null, sum: number): number[][] {
  if (!root) return [];
  if (!root.right && !root.left)
    return sum === root.val ? [[root.val]] : [];

  var leftArrs = pathSum(root.left, sum - root.val);

  var rightArrs = pathSum(root.right, sum - root.val);

  if (!rightArrs && !leftArrs) return [];

  return leftArrs
    .map((e) => [root.val].concat(e))
    .concat(rightArrs.map((e) => [root.val].concat(e)));
}
