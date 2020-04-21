/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = j = 0;
  let total = nums1.length + nums2.length;
  let mid = Math.floor(total/2)
  let odd = false
  if(total % 2 == 1) {
      odd = true
  }
  let pre
  let n1 = Infinity;
  let n2 = Infinity;
  while(i+j<=mid){
      n1 = i === nums1.length ? Infinity:nums1[i];
      n2 = j === nums2.length ? Infinity:nums2[j];
      if(odd) {
          if(i+j === mid){
              return Math.min(n1, n2)
          }
      } else {
          if(i+j === mid-1) {
              pre=Math.min(n1, n2)
          } else if(i+j === mid) {
              return (pre + Math.min(n1, n2))/2
          }
      }
      n1 < n2 ?i++:j++;
  }
};