var reverse = function(x) {
  if(x < 10 && x > -10) return x;
  let positive = x>0
  let s = x+''
  !positive && (s=s.slice(1))
  let MAX = 2**31-1
  let MIN = -(2**31)
  let r = positive?s.split('').reverse().join('')*1:s.split('').reverse().join('')*(-1)
  if(positive) {
      return r>MAX?0:r
  }
  return r<MIN?0:r
};