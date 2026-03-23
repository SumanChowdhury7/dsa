//Accept a string from user and print every character in new line
// const prompt = require("prompt-sync")();

// const s = prompt("Enter a string:")

// for(let i = 0; i<s.length; i++){
//     console.log(s.charAt(i))
// }

// print every character bacwards in new line

// const prompt = require("prompt-sync")();

// const s = prompt("Enter a string:")

// // for(let i = s.length-1; i>=0; i--){
// //     console.log(s.charAt(i))
// // }
// let rev = "";

// for(let i = s.length-1; i>=0; i--){
//     rev = rev + s.charAt(i);
// }
// console.log(rev)

// using 2 pointer check a string  is palindromic or not

// let s = "naman";

// let i = 0;

// let j = s.length-1
// let isPalindrome = true

// while(i<j){
//     if(s[i]=== s[j]){
//         j--;
//     } else{
//         isPalindrome = false
//     }
//     i++

// }
// if(isPalindrome){
//     console.log("The string is a palindrome")
// } else{
//     console.log("its not a palindrome")
// }

//uppercase to lower, lowercase to upper

// let s = "AcgDfd"

// let ans = "";

// for (let i = 0; i<s.length; i++){
//     let ascii = s.charCodeAt(i)

//     if(ascii>=65 && ascii<=90){
//        ans = ans + String.fromCharCode(ascii + 32)
//     } else {
//         ans = ans + String.fromCharCode(ascii - 32)
//     }
// }
// console.log(ans)

// let words = ["attend", "atkins", "atom", "bombay", "benefits"]

// let s = "at"
// let count = 0;

// for(let i = 0; i<words.length; i++){
//     let w = words[i]

//     if(w.startsWith(s)){
//         count++
//     }
// }
// console.log(count)

let sentence = " suman is a mern stack developer";

let s = sentence.split(" ");
let ns = "";

for (let i = 0; i<s.length; i++){
 let words = s[i]
let temp = "";
let first = words.charAt(0). toUpperCase();
let mid = words.substring(1,words.length-1);
let last = words.charAt(words.length-1). toUpperCase()

ns = ns + (first+mid+last)+ " ";

}

console.log(ns)