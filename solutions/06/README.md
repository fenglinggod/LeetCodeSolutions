# 题目名称  
Z 字形变换        
# 题目地址  
https://leetcode-cn.com/problems/zigzag-conversion/    
# 题目描述  
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。   
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：        
```
L   C   I   R       0 4 8
E T O E S I I G     1 3 5 7
E   D   H   N       2 6 10
```  
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如:"LCIRETOESIIGEDHN"。  
请你实现这个将字符串进行指定行数变换的函数：  
```
string convert(string s, int numRows);
```
示例 1:  
```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```
示例 2:  
```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释: 

L     D     R               0     0 6 12         
E   O E   I I     0 2 3 5 6 1     1 5 7 11 13    
E C   I H   N     0 1 3 4 6 2     2 4 8 10 14    
T     S     G               0     3 9 15
```
# 个人解法  
这个题我的一种解法为找规律： 
``` 
L     D     R     0 6 12           
E   O E   I I     1 5 7 11 13      
E C   I H   N     2 4 8 10 14      
T     S     G     3 9 15   
  
L   C   I   R       0 4 8  
E T O E S I I G     1 3 5 7  
E   D   H   N       2 6 10  
```
通过上面的, 按行计算对位置,每行相邻两个字母的间隔为 2*(行号-(当前字符所在的位置 % numRows-1))

另一种解法就是按行去排序,建立numRows行,根据方向决定下一次访问的字符放在哪一行,当行数为0时,方向变为下方向,当行为numRows-1时,方向变为上方向

# 执行结果  
### 根据规律：
执行用时 :92 ms, 在所有 JavaScript 提交中击败了93.17%的用户  
内存消耗 :38 MB, 在所有 JavaScript 提交中击败了100.00%的用户

### 按行排序：
执行用时 :100 ms, 在所有 JavaScript 提交中击败了79.05%的用户  
内存消耗 :39.1 MB, 在所有 JavaScript 提交中击败了83.33%的用户    