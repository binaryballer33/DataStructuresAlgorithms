// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    let anagrams = {};
 
    for(let eachString of strs) {
        let sortedWord = eachString.split("").sort().join("");
        if(!anagrams.hasOwnProperty(sortedWord)) {
            anagrams[sortedWord] = [eachString];
        } else {
            anagrams[sortedWord].push(eachString)
        }
    }
    return Object.values(anagrams);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));