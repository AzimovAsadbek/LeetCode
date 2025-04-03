#  description link --> https://leetcode.com/problems/merge-strings-alternately/description/

# Solution - 1 /
# Runtime 28ms / 97.22%
# Memory 17.72mb / 48.78%

# def mergeAlternately  (word1, word2) :
#     res = ""
#     if len(word1) > len(word2):
#         for i in range(len(word2)):
#             res += word1[i]
#             res += word2[i]
#         res += word1[len(word2):]
#     else :
#         for i in range(len(word1)):
#             res += word1[i]
#             res += word2[i]
#         res += word2[len(word1):]
#     return res


# print(mergeAlternately("abc1", "dek"))



# Solution - 2 /
# Runtime 27ms / 97.90%
# Memory 17.65mb / 73.93%


# def mergeAlternately  (word1, word2) :
#     res = ""
#     min_length = min(word1, word2)
#     for i in range(min_length):
#         res += word1[i]
#         res += word2[i]
#     res += word1[min_length:]
#     res += word2[min_length:]
#     return res

# print(mergeAlternately("abc1", "dek"))
