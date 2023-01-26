/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let string = ""
    if (strs.length === 1 || strs[0] === "") {
        return strs[0]
    }

    for (var i = 0; i < 100; i++) {
        for (var j = 1; j < strs.length ; j++) {
            if (strs[0][i] !== strs[j][i] || !strs[0][i]) {
                return string
            }
        }
        string = string + strs[0][i]
    }
    return string
};

const strs = ["flower","flower","flower","flower"]
console.log(longestCommonPrefix(strs))

//Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".


//BEST
//var longestCommonPrefix = function(strs) {
//     let result = ""
//     const sorted = strs.sort()
//     for(let i = 0; i < sorted[0].length; i++){
//         if(sorted[0][i] === sorted[sorted.length-1][i]){
//                 result += sorted[0][i]
//         }else{
//             return result
//         }
//     }
//     return result
//