const twoSum = function(nums, target) {
  const obj = Object.create(null)
  for(let i = 0, j = nums.length; i < j; i++) {
      const cur = nums[i]
      const ano = target - cur
      if(obj[ano]!==undefined) {
          return [obj[ano], i]
      }
      obj[cur] = i
  }
};