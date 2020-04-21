# 题目名称  
两数之和  
# 题目地址  
https://leetcode-cn.com/problems/two-sum/  
# 题目描述  
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。  

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。  

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。  
```
给定 nums = [2, 7, 11, 15], target = 9  
因为 nums[0] + nums[1] = 2 + 7 = 9  
所以返回 [0, 1]
```
# 个人解法  
把每次遍历记录下来，用target减去当前遍历的值，作为key去查找  
# 执行结果  
通过  

执行用时 :64 ms, 在所有 JavaScript 提交中击败了90.64%的用户  
内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了82.20%的用户  