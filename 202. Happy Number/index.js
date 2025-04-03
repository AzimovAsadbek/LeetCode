// description link --> https://leetcode.com/problems/happy-number/description/

// Solution - 1 /
// Runtime 0ms / 100%
// Memory 53.29mb / 72.81%

// var isHappy = function (n) {
//     if (n == 1 || n == 7) return true
//     if (n == 4 || n == 37 || n == 58 || n == 145 || n == 20 || n == 42) return false
//     k = String(n)
//     n = 0
//     for (let i = 0; i < k.length; i++) {
//         n += (k[i]) ** 2
//     }
//     return isHappy(n)
// };

// console.log(isHappy(20))

// Solution - 2 /
// Runtime 0ms / 100%
// Memory 53.68mb / 69.84%

// var isHappy = function (n) {
//     while (1) {
//         if (n == 1 || n == 7) return true
//         if (n == 4 || n == 37 || n == 58 || n == 145 || n == 20 || n == 42) return false
//         k = String(n)
//         n = 0
//         for (let i = 0; i < k.length; i++) {
//             n += (k[i]) ** 2
//         }
//     }
// };

// console.log(isHappy(19))


