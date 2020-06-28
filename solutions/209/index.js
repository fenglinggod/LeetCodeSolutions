var minSubArrayLen = function(s, nums) {
  var min = 0
  for(let i=0;i<nums.length;i++) {
      let res = subCalc(nums.slice(i))
      if(res === false) {
          break;
      }
  }

  return min

  function subCalc(rest) {
      var total = 0      
      let i=0;
      while(total<s) {
        if(i >= rest.length) {
            i = 0;
            return false;
        } else {
            if(min && i>min) {
                i = 0;
                break;
            }
            total += rest[i]
            i++
        }
      }

      if(i!==0 && (!min || min > i)) {
          min = i
      }
  }
};




var minSubArrayLen = function(s, nums) {
  if(!nums.length) return 0;
  var start = end = 0
  let total = 0
  let min = 0
  while(start <= end) {
    if(total < s) {
        if(!nums[end]) {
            break
        }
        total += nums[end]
        end++
    } else if(total >= s) {
        if(!min || min > (end-start)) min = end-start
        total -= nums[start]
        start++
    }
  }
  return min
};
