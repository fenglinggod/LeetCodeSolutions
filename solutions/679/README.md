# 题目名称      
24 点游戏        
# 题目地址     
https://leetcode-cn.com/problems/24-game/
# 题目描述  
你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。  
示例 1:  
```
输入: [4, 1, 8, 7]
输出: True
解释: (8-4) * (7-1) = 24
```
示例 2:  
```
输入: [1, 2, 1, 2]
输出: False
```
注意:  
- 除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。  
- 每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允许的。  
- 你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。  
# 个人解法   
迭代穷举, 这道题十分之恶心
当1个数时, 只有一个答案
当2个数时, 有6种答案
当3个数时, 3*6*6 = 108种答案
当4个数时, 4 * 108 * 6 + 6 * 6 * 6 * 6 = 3888种答案
# 执行结果  
执行用时 :108 ms, 在所有 JavaScript 提交中击败了52.78%的用户  
内存消耗 :44.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户  