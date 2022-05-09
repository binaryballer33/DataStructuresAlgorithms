// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let area = 0;
    let rightPtr = height.length - 1;
    // this is hacky way to fix the fact that I didn't use a while loop :)
    for(let leftPtr = 0; leftPtr < height.length; leftPtr++) {
        if(leftPtr >= rightPtr) return area;
        area = Math.max(Math.min(height[leftPtr], height[rightPtr]) * (rightPtr - leftPtr), area)
        if(height[leftPtr] > height[rightPtr]) {
            rightPtr -= 1;
            leftPtr -= 1;
        } else {
            continue;
        }
    }
    return area;
};



// /**
//  * @param {number[]} height
//  * @return {number}
//  */
//  var maxArea = function(height) {
//     let biggestArea = 0;
//     for(let i = 0; i < height.length; i++) {
//         for(let j = i + 1; j < height.length; j++) {
//             let area = Math.min(height[i], height[j]) * (j - i);
//             biggestArea = Math.max(biggestArea, area);
//         }
//     }
//     return biggestArea;
// };

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output Expected: 49
console.log(maxArea([1,2,3,4,5]));