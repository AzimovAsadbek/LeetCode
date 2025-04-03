// description link --> https://leetcode.com/problems/score-of-a-string/description/

// Solution - 1 /
// Runtime 0ms / 100%
// Memory 54.46mb / 39.74%


// var scoreOfString = function (s) {
//     let n = 0
//     for (let i = 0; i < s.length - 1; i++) {
//         n += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt())
//     }
//     return n
// };

// console.log(scoreOfString("hello"))