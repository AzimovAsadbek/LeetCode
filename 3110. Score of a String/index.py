# description link --> https://leetcode.com/problems/score-of-a-string/description/

# Solution - 1 /
# Runtime 0ms / 100%
# Memory 17.70mb / 77.86%

# def scoreOfString (s):
#     res = 0
#     for i in range(len(s)-1):
#         res += abs(ord(s[i]) - ord(s[i+1]))
#     return res

# print(scoreOfString("hello"))