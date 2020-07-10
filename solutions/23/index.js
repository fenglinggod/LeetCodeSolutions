/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let result = null
  let last = null
  
  while(lists.length) {
      let cur = null;
      let index = null;
      for(let i=0;i<lists.length;i++){
          if(!lists[i]) continue
          if(!cur) {
              cur = new ListNode(lists[i].val)
              index = i;
          } else if(lists[i].val < cur.val) {
              cur.val = lists[i].val
              index = i
          }
      }
      if(last) {
          last.next = cur
      } 
      last = cur
      if(!result) {
          result = cur
      }
      if(index!==null) {
          lists[index] = lists[index].next
          if(!lists[index]) {
              lists.splice(index, 1)
          }
      } else {
          return result
      }
  }
  return result
};