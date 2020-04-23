# 题目名称  
最长回文子串      
# 题目地址  
https://leetcode-cn.com/problems/longest-palindromic-substring/    
# 题目描述  
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。    
  
来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays   
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。   
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。  

输入: "cbbd"
输出: "bb"
```
# 个人解法  
由于不想做暴力求解,所以去网上找了一些解法分析。   
### 动态规划：  
  如何判断一个回文子串：   
    对于一个字母时成立,即i===j   
    对于两个字母时如果两个字母相同,则同样成立,即j-i===1 && s[i]===s[j]   
    对于两个以上字母时如果s[i]===s[j] && s[i+1]===s[j-1],则成立  

### 中心扩展法  
  当s[i]===s[j]时,判断s[i-1]与s[j+1]是否相等,这样做可以节省内存空间  

### [Manacher 算法](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/)  

# 执行结果  
### 动态规划：
执行用时 :360 ms, 在所有 JavaScript 提交中击败了39.06%的用户  
内存消耗 :110.9 MB, 在所有 JavaScript 提交中击败了35.71%的用户

### 中心扩展法：
执行用时 :116 ms, 在所有 JavaScript 提交中击败了70.48%的用户  
内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了64.29%的用户    