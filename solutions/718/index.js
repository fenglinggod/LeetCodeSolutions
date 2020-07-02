var findLength = function(A, B) {
  let result = 0
  const a = []
  for(let ai=A.length-1; ai>=0; ai--) {
      let b = []
      a[ai] = b
      for(let bi=B.length-1; bi>=0; bi--) {
          b[bi] = A[ai] === B[bi]?(a[ai+1]?a[ai+1][bi+1]?a[ai+1][bi+1]:0:0) + 1 : 0;
          result = Math.max(result, b[bi])
      }
  }
  return result
};
