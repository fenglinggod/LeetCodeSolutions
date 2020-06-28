/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {

  function getGroup(arr) {
      if(arr.length === 1) {
          return arr
      } else if(arr.length === 2) {
          return calc([arr[0]], [arr[1]])
      } else if(arr.length === 3) {
          return [ 
              ...calc([arr[0]], getGroup([arr[1],arr[2]])),
              ...calc([arr[1]], getGroup([arr[0],arr[2]])),
              ...calc([arr[2]], getGroup([arr[0],arr[1]]))
          ]
      } else if(arr.length === 4) {
          let result = []
          for(let i=0; i<arr.length;i++) {
              result.push(...calc([arr[i]], getGroup(splice(arr, i)), true))
          }
          result.push(...calc(getGroup([arr[0], arr[1]]), getGroup([arr[2], arr[3]]), true))
          result.push(...calc(getGroup([arr[0], arr[2]]), getGroup([arr[1], arr[3]]), true))
          result.push(...calc(getGroup([arr[0], arr[3]]), getGroup([arr[1], arr[2]]), true))
          result.push(...calc(getGroup([arr[1], arr[2]]), getGroup([arr[0], arr[3]]), true))
          result.push(...calc(getGroup([arr[1], arr[3]]), getGroup([arr[0], arr[2]]), true))
          result.push(...calc(getGroup([arr[2], arr[3]]), getGroup([arr[0], arr[1]]), true))
          return result
      }
  }

  function splice(arr, index){
      let result = []
      for(let i=0;i<arr.length;i++) {
      if(i!==index) {
          result.push(arr[i])
      }
      }
      return result
  }

  function calc(arr1, arr2, bo) {
      const result = []
      for(let i=0; i<arr1.length; i++) {
          for(let j=0;j<arr2.length;j++) {
              result.push(arr1[i]+arr2[j])
              result.push(arr1[i]-arr2[j])
              result.push(arr2[j]-arr1[i]) 
              result.push(arr1[i]*arr2[j]) 
              result.push(bo?Math.round(arr1[i]/arr2[j], 5):arr1[i]/arr2[j]) 
              result.push(bo?Math.round(arr2[j]/arr1[i], 5):arr2[j]/arr1[i])
          }
      }
      return result
  }

  let result = getGroup(nums)
  console.log(result.length)
  if(result.includes(24)) {
      return true
  } 
  return false
};

console.log(judgePoint24([3,3,8,8]))