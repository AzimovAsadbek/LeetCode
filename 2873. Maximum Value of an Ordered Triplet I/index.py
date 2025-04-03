# description link --> https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/


# Solution - 1 /
# Runtime 71ms / 54.36%
# Memory 17.47mb / 99.25%


# def maximumTripletValue ( nums ):
#     max = 0
#     for i in range(len(nums)):
#         for j in range(i + 1, len(nums)):
#             for k in range(j+ 1, len(nums)):
#                n = (nums[i] - nums[j]) * nums[k] 
#                n > max and (max := n)
#     return max


# Solution - 2 /
# Runtime 0ms / 100%
# Memory 17.97mb / 19.20%


# def maximumTripletValue ( nums ):
    # i, j, k = 0, 0, 0
    # for x in nums:
    #     k = max(k, j*x)
    #     j = max(i - x, j)
    #     i = max(i, x)
    # return k

# print(maximumTripletValue([12,6,1,2,7]))


# Solution - 3 /
# Runtime 35ms / 55.86%
# Memory 17.66mb / 82.79%

# def maximumTripletValue ( nums ):
#     max = 0
#     for i in range(len(nums)):
#         if nums[i] > 0:
#             for j in range(i + 1, len(nums)):
#                 if nums[i] - nums[j] > 0:
#                     for k in range(j+ 1, len(nums)):
#                        n = (nums[i] - nums[j]) * nums[k] 
#                        n > max and (max := n )
#     return max

# print(maximumTripletValue([12,6,1,2,7]))
