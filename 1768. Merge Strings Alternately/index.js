// description link --> https://leetcode.com/problems/merge-strings-alternately/description/

// Solution - 1 /
// Runtime 28ms / 99.23%
// Memory 53.33mb / 60.54%

// var mergeAlternately = function (word1, word2) {
//     let l = Math.max(word1.length, word2.length)
//     let res = ""
//     for (let i = 0; i < l; i++) {
//         res += word1[i] || ""
//         res += word2[i] || ""
//     }
//     return res
// };

// console.log(mergeAlternately("abc", "pqr"));



// Solution - 2 /
// Runtime 35ms / 93.99%
// Memory 54.59mb / 54.12%

// var mergeAlternately = function (word1, word2) {
//     let l = Math.min(word1.length, word2.length)
//     let res = ""
//     for (let i = 0; i < l; i++) {
//         res += word1[i] || ""
//         res += word2[i] || ""
//     }
//     res += word1.slice(l, word1.length)
//     res += word2.slice(l, word2.length)
//     return res
// };

// console.log(mergeAlternately("ab", "pqrs"));