//  description link --> https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/

// Solution - 1 /
// Runtime 7ms / 5.41%
// Memory 61.44mb / 5.40%


// var maximumTripletValue = function (nums) {
//     let max = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 n = (nums[i] - nums[j]) * nums[k]
//                 if (n > max) max = n
//             }
//         }
//     };
//     return max
// }

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));



// Solution - 2 /
// Runtime 2ms / 83.78%
// Memory 55.50mb / 25.67%

// var maximumTripletValue = function (nums) {
//     let i = j = k = 0
//     for (let item of nums) {
//         k = Math.max(k, item * j)
//         j = Math.max(i - item, j)
//         i = Math.max(i, item)
//     }
//     return k
// }

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));


// Solution - 3 /
// Runtime 1ms / 83.78%
// Memory 54.10mb / 71.62%

// var maximumTripletValue = function (nums) {
//     let max = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0)
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] - nums[j] > 0)
//                     for (let k = j + 1; k < nums.length; k++) {
//                         let n = (nums[i] - nums[j]) * nums[k]
//                         max = Math.max(n, max) // max < n && (max = n)
//                     }
//             }
//     };
//     return max
// }
// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
