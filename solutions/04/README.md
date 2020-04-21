# 题目名称  
寻找两个有序数组的中位数      
# 题目地址  
https://leetcode-cn.com/problems/median-of-two-sorted-arrays/    
# 题目描述  
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。  

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。  

你可以假设 nums1 和 nums2 不会同时为空。  

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。   
```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0    
  
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5  
```
# 个人解法  
计算出两个数组的长度和是奇数还是偶数,对两个数组取数比较,小者将其指针后移一位。如果两数组长度和为奇数,则当两个数组指针相加为中位数的位数时直接返回小者。否则,计算中位数位数-1的小者和中位数位数的平均值。    
# 执行结果  
通过  

执行用时 :112 ms, 在所有 JavaScript 提交中击败了98.07%的用户  
内存消耗 :38.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户    