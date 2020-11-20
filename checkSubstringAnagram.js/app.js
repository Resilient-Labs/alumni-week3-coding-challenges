//Two words are anagrams of one another if their letters can be rearranged to form the other word.
//In this challenge, you will be given a string. You must split it into two contiguous substrings, then determine the minimum number of characters to change to make the two substrings into anagrams of one another.

//For example, given the string 'abccde', you would break it into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

//Input Format
//The first line will contain an integer, the number of test cases.
//Each test case will contain a string  which will be concatenation of both the strings described above in the problem.
//The given string will contain only characters in the range ascii[a-z].

//Output Format
//For each test case, print an integer representing the minimum number of changes required to make an anagram. Print  if it is not possible.

const countLettersUntilAnagram = str => {
    //check if the string is not even number of characters and return -1
    if(str.length % 2 !== 0) return -1;
    //create variable middle to track middle of the string 
    const middle = str.length /2;
    //create a subtring from half to middle of string 
    const subStringOne = str.substring(0, middle);
    //create a subtring for second half
    let subStringTwo = str.substring(middle);
    //loop through the first sub string
    for(let i=0; i < subStringOne.length; i++){
        //check if a letter from sub string is already in the second sub string
        if(subStringTwo.indexOf(subStringOne[i]) !== -1) {
            //then delete that letter from second sub string
            subStringTwo = subStringTwo.replace(subStringOne[i], '')
        }
    }
    //return length of second sub string 
    return subStringTwo.length;
}

console.log(countLettersUntilAnagram('aaabbb')); //3
console.log(countLettersUntilAnagram('ab')); //1
console.log(countLettersUntilAnagram('abc')); //-1
console.log(countLettersUntilAnagram('mnop')); //2
console.log(countLettersUntilAnagram('xyyx')); //0
console.log(countLettersUntilAnagram('xaxbbbxx')); //1