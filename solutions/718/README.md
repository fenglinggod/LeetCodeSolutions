# 题目名称       
最长重复子数组       
# 题目地址       
https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/ 
# 题目描述  
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。  
示例：  
```
输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。
```  
提示：  
- 1 <= len(A), len(B) <= 1000  
- 0 <= A[i], B[i] < 100
# 个人解法   
动态规划：  
  如果A[ai]===B[bi], 则A[ai] B[bi]的最长公共子串应为 A[ai+1] B[bi+1]的最长公共子串+1
# 执行结果  
执行用时 :84 ms, 在所有 JavaScript 提交中击败了82.94%的用户  
内存消耗 :35.8 MB, 在所有 JavaScript 提交中击败了87.50%的用户  