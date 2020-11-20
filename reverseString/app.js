const reverseStr = str => {
    if (str === '') return '';
    return reverseStr(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr('year'))
/*--------------------------------------------*/

//for of loop
// const reverseStr = str => {
//     let reversed = '';
//     for(let char of str){
//         reversed = char += reversed;
//     }
//     return reversed;
// }
/*--------------------------------------------*/

//for loop
// const reverseString = str => {
//     let reversedStr = '';
//     for(let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
/*--------------------------------------------*/


//using reduce 
// const reverseStr = str => {
//     return str.split('').reduce((reversed, character)=>{
//       return character + reversed;
//     }, '');
//   }