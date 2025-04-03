# Solution - 1 /
# Runtime 169ms / 74%
# Memory 29.39mb / 87.03%


# def maximumTripletValue ( nums ):
#     i, j, k = 0, 0, 0
#     for x in nums:
#         k = max(k, j*x)
#         j = max(i - x, j)
#         i = max(i, x)
#     return k

# print(maximumTripletValue([12,6,1,2,7]))