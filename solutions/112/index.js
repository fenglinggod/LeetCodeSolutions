var hasPathSum = function(root, sum) {
  let curSum = 0;
  let result = false
  travel(root)
  function travel(root) {
      if(root===null || result) return
      curSum += root.val
      console.log(curSum)
      if(root.left===null && root.right===null){
          if(curSum === sum)
              result = true
          else curSum -= root.val
      } 
      else {
          if(root.left) {
              travel(root.left)
          } 
          if(root.right) {
              travel(root.right)
          }
          curSum -= root.val
      }
  }
  return result
};

var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.val === sum && !root.left && !root.right) return true;
  let target = sum - root.val;
  return hasPathSum(root.left, target) || hasPathSum(root.right, target);
};
