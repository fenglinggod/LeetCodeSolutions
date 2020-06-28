var isMatch = function (s, p) {
  // p为空
  if (!p || p === '') {
    return !s || s === ''
  }

  // p不包含*
  if (!p.includes('*')) {
    if (s.length !== p.length) {
      return false
    } else {
      return pureMatch(s, p)
    }
  } else {
    // 根据*分开
    let arr = p.split('*')
    // *前面就不匹配 则直接返回不匹配
    if (!pureMatch(s.slice(0, arr[0].length), arr[0])) {
      return false
    }

    let i = 1
    let str = s.slice(arr[0].length)
    while (i < arr.length) {
      let pat = arr[i]
      if (str.length < pat.length) return false
      if (pat.length === 0) i++
      else {
        str = dynamicMatch(pat)
        if (!str) {
          return false
        }
        i++
      }
    }
    return true

    function dynamicMatch(pat) {
      let j = 0
      for (; j < pat.length; j++) {
        if (!pureMatch(str[j], pat[j])) {
          str = str.slice(j + 1)
          j = 0
        }
        if (str.length < pat.length) return false
      }
      return str.slice(j)
    }
  }

  function pureMatch(str, pat) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== pat[i] && pat[i] !== '.') {
        return false
      }
    }
    return true
  }
}

console.log(isMatch('asdfgsssss', 'asd.g*ss'))
