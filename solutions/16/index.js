var threeSumClosest = function(nums, target) {
  const sortedArr = nums.sort((a,b)=>a-b)
  for(let i=0;i<sortedArr.length-2;i++) {
    towardTarget(sortedArr[i], sortedArr.slice(i+1), target)
  }
  return nearest.sum
};

var nearest
function judgeNearTarget (sum, target) {
  let cur = Math.abs(sum - target)
  if(nearest === undefined) {
      nearest = {sum:sum, near: cur}
  } else if(cur <= nearest.near){
      nearest.sum = sum
      nearest.near = cur
  } 
  console.log(nearest)
}

function towardTarget(selectedNum, restArr, target) {
  let i=0, j=restArr.length-1
  while(i<j){
      let result = approach(selectedNum, restArr[i], restArr[j])
      if(result) break;
  }

  function approach(a, b, c) {
      const sum = a+b+c
      judgeNearTarget(sum, target)
      if(sum < target) i++
      else if(sum > target) j--
      else {
          return true
      }
  }
}

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))