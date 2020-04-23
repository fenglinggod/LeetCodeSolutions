/**
 * @param {string} s
 * @return {string}
 */
// dynamic programming
var longestPalindrome1 = function(s) {
  let resI = 0
  let resJ = 0
  let t = []

  for(let i=s.length-1;i>=0;i--) {
      t[i] = []
      for(let j=i;j<s.length;j++) {
          if(i===j) {
              t[i][j] = true
          } else if(j-i===1 && s[i]===s[j]) {
              t[i][j] = true
          } else if(s[i] === s[j] && t[i+1][j-1]) {
              t[i][j] = true
          }

          if(t[i][j] && j-i+1 > resJ-resI) {
              resI=i
              resJ=j
          }
      }
  }
  return s.slice(resI, resJ+1)
};


// Media Center Extend
var longestPalindrome2 = function(s) {
  if(!s) return ''
  let resI=0,resJ=0
  for(let i=0;i<s.length;i++){
      let t1 = extendsSearch(i,i)
      let t2 = extendsSearch(i, i+1)
      let r = t1[2]>t2[2]?t1:t2
      if(r[2] > resJ-resI) {
          [resI,resJ] = r
      }
  }

  return s.slice(resI,resJ+1)

  function extendsSearch(L, R){
      let l=L, r=R
      while(l>=0&&R<s.length&&s[l]===s[r]) {
          l--;
          r++
      }
      return [++l, --r, r-l]
  }
};