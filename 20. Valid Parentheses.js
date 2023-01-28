/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let array = []
    let list1 = ["(", "{", "["]
    for (let i = 0; i < s.length; i++) {
        if (list1.indexOf(s[i]) !== -1 ) {
            array.push(s[i])
        } else if (s[i] === ")" && array.length !== 0 && array[array.length - 1] === "(") {
            array.pop()
        } else if (s[i] === "}" && array.length !== 0 && array[array.length - 1] === "{") {
            array.pop()
        } else if (s[i] === "]" && array.length !== 0 && array[array.length - 1] === "[") {
            array.pop()
        } else {
            return false
        }
    }
    return array.length === 0
};

const s = "({[]})(){"
console.log(isValid(s))

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

//BEST
///**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let stack = []
//     let pairs = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (pairs[s[i]]) {
//             stack.push(s[i])
//         } else {
//             if (pairs[stack.pop()] !== s[i]) return false
//         }
//     }
//     return stack.length === 0
// };