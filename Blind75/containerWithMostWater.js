// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let biggestArea = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            let area = Math.min(height[i], height[j]) * (j - i);
            biggestArea = Math.max(biggestArea, area);
        }
    }
    return biggestArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output Expected: 49
console.log(maxArea([1,2,3,4,5]));