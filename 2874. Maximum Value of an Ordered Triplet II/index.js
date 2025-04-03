// Solution - 1 /
// Runtime 9ms / 70.97%
// Memory 69.04mb / 51.61%

// var maximumTripletValue = function (nums) {
//     let i = j = k = 0
//     for (x of nums) {
//         k = Math.max(k, j * x)
//         j = Math.max(i - x, j)
//         i = Math.max(i, x)
//     }
//     return k
// };

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
