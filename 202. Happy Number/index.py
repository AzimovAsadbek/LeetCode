# description link --> https://leetcode.com/problems/happy-number/description/


# Solution - 1 /
# Runtime 0ms / 100%
# Memory 53.29mb / 72.81%

# def isHappy(n):
#     if n == 1: return True
#     if n == 4 or n == 37 or n == 58 or n == 145 or n == 20 or n == 42:  return False
#     x = str(n)
#     n = 0
#     for i in x:
#         n += int(i) ** 2 
#     return isHappy(n)

# print(isHappy(19))

# Solution - 2 /
# Runtime 0ms / 100%
# Memory 17.62mb / 87.06%

# def isHappy(n):
#     while True:
#         if n == 1: return True
#         if n == 4 or n == 37 or n == 58 or n == 145 or n == 20 or n == 42:  return False
#         x = str(n)
#         n = 0
#         for i in x:
#             n += int(i) ** 2 


# print(isHappy(30))