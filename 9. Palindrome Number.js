/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const elem = x.toString()
    for ( var i =0 ; i < elem.length / 2; i++){
        console.log("elem[i]", elem[i])
        console.log("elem[x.toString().length - 1 - i]", elem[elem.length - 1 - i])
        if(elem[i] == elem[elem.toString().length - 1 - i]){
        } else {
            return false
        }
    }
    return true
};

const x = 121
console.log(isPalindrome(x))

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.


//Best

//**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     //guess if it's a uni digit  integer, it's automatically a palindrome
//     if(x < 0 || (x % 10 == 0 && x != 0)) {
//         return false;
//     }
//
//     if(x.toString().split('').reverse().join('') === x.toString())
//     {
//         return true
//     }else{
//         return false
//     }
//
// };