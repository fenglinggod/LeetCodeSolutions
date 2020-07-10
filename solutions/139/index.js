var wordBreak = function(s, wordDict) {
  const wordDictMap = changeArr2Map(wordDict)
  const matchedResult = Object.create(null)
  return wordBreakExec(0)

  function changeArr2Map(arr){
    const map = Object.create(null)
    arr.forEach(a=>{
        map[a] = true
    })
    return map
  }

  function wordBreakExec(start) {
    let str = ''
    if(matchedResult[start] !== undefined) return matchedResult[start]
    for(let i=start;i<s.length;i++) {
        str += s[i]
        if(wordDictMap[str]){ 
            if(i>=s.length-1) return true
            if(wordBreakExec(i + 1)){ 
                matchedResult[i] = true
                return true
            }
        }
    }
    matchedResult[start] = false;
    return false
  }
};

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))