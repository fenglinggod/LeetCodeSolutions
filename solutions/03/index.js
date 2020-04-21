/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 1, l = s.length;
  let last = 0;
  let max = 0;
  let sliceStr = '';

  if(l === 1) {
      return 1;
  }

  while(i < l){
      if(!sliceStr.length) {
          sliceStr = s.slice(last, i)
      }

      const existChar = sliceStr.indexOf(s[i])
      if(existChar > -1) {
          max = Math.max(max, i-last)
          last = last + existChar + 1
          sliceStr = sliceStr.substr(existChar + 1)
      } else {
          sliceStr += s[i]
          i += 1
          if(i === l) {
              max = Math.max(max, i-last)
          }
      }
  }
  return max
};