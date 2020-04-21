# 题目名称  
无重复字符的最长子串    
# 题目地址  
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/  
# 题目描述  
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。   
来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。   
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。  
  
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。  
  
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。  
```
# 个人解法  
遍历字符串 其中需要两个指针--起点last和目前的index,当发现有重复字符时,取得重复字符相对于截取出来的字符串的位置,改变last指针  
# 执行结果  
通过  

执行用时 :88 ms, 在所有 JavaScript 提交中击败了93.75%的用户
内存消耗 :40.5 MB, 在所有 JavaScript 提交中击败了41.09%的用户  