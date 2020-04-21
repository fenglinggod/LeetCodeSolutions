/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = null;
  let cur = null;
  let t = 0
  let l1_cur = l1
  let l2_cur = l2
  let sum = 0
  let n = 0
  let curRes
  function calculate(v1, v2){
      sum = v1+v2+t
      n = sum % 10
      t = Math.floor(sum / 10)
      return new ListNode(n)
  }
  function getNum (l) {
      return l?l.val:0;
  }
  while(l1_cur || l2_cur || t) {
      sum = 0
      n = 0
      curRes = calculate(getNum(l1_cur), getNum(l2_cur))
      if(!result) {
          result = curRes
          cur = result
      } else {
          cur.next = curRes
          cur = cur.next
      }
      l1_cur = l1_cur?l1_cur.next:null
      l2_cur = l2_cur?l2_cur.next:null
  }
  return result
};