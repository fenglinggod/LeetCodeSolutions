/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, numRows) {
  if(numRows === 1) return s
  let res = ''
  let t = numRows - 1

  for(let i=0;i<numRows;i++) {
      let j = i;
      let m = i % t;
      while(j < s.length) {
          res += s[j]
          let d = 2*(t - (j % t))
          j+=d
      }
  }
  return res
};

// 排序
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1 || s.length <= numRows) {
      return s;
  }
  let res = []
  let downDir = true
  let row = 0;
  for(let i=0;i<s.length;i++) {
      if(!res[row]) {
          res[row] = ''
      }
      res[row] += s[i]
      downDir?row+=1:row-=1
      if(row+1 === numRows) {
          downDir = false
      } else if(row===0) {
          downDir = true
      }
  }
  return res.reduce((memo,next)=>(memo+next))
};