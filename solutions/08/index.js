var myAtoi = function(str) {
  let s = str.trim()
  let MAX = 2 * (2 << 29) - 1
  let MIN = 2 << 30
  let num
  if(num = s.match(/^([+|-]?\d+)/)){
      let n = num[1]*1
      if(n > MAX) return MAX
      if(n < MIN) return MIN
      return n
  } 
  return 0
};