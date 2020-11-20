// We all want to climb the leaderboard. Even given some of the massive scores on there, it's nice to know how close you are...
// In this kata you will be given a username and their score, your score (not your real score) and you need to 
// calculate how many kata you need to complete to beat their score, by 1 point exactly.
// Note : this kata has some reported issues with problem description and testing
function leaderB(user, user_score, your_score){
    let difference = user_score - your_score; 
    if(difference===0) return "Only need one!"
    if(Math.sign(difference) < 0 ) return "Winning!";
    let div = Math.trunc(difference / 3);
    if(div*3===difference){
        if(difference > 1000){
            return `To beat ${user}'s score, I must complete ${div} Beta kata and 0 8kyu kata. Dammit!`;
        }
        return `To beat ${user}'s score, I must complete ${div} Beta kata and 0 8kyu kata.`;
    }
    let kata = difference - (div*3);
    if(difference > 1000){
        return `To beat ${user}'s score, I must complete ${div} Beta kata and ${kata} 8kyu kata. Dammit!`;
    }
    return `To beat ${user}'s score, I must complete ${div} Beta kata and ${kata} 8kyu kata.`;
  }

  // Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
var numberOfSteps  = function(num) {
    let steps = 0
    while(num>0) {
        const target = num/2
        if (target === Math.floor(target)) {
            num/=2
        }else{
            num--
        }
        steps++        
    }
    return steps
};

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
var toLowerCase = function(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        let ascii = str.charCodeAt(i);
        let toLower = ascii >= 65 && ascii <= 90  ? 32 : 0;
        result += String.fromCharCode(ascii + toLower);
    }  
    return result;
};

//optimization using destructuring and map
var toLowerCase = function(str) {
    return [...str].map(s => {
        const code = s.charCodeAt()
        return (code >= 65 && code <= 90) ? String.fromCharCode(code + 32) : s
    }).join('')
};

// Given a string s and an integer array indices of the same length.
//The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
function restoreString(s, indices) {
    let str = s.split('');
    let obj = {};
  
    for (let i = 0; i < str.length; i++) {
      obj[indices[i]] = str[i];
    }
  
    return Object.values((obj)).join('');
  }

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr.includes(2*arr[i])){
            return true;
        }
    }
    return false;
};

// Given an array of integers arr, return true if and only if it is a valid mountain array.
var validMountainArray = function(arr) {
    // find peak then go up and down to ensure mountain
    let M = arr.length;
    let i =0;
    //going up
    while(i+1 < M && arr[i] < arr[i+1]){
        i++;
    }
    if(i==0 || i== M-1){
        return false;
    }
    //going down
    while(i+1 < M && arr[i] > arr[i+1]){
        i++;
    }
    return i == M-1;
};

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
const moveZeroes = nums => {
    let i = 0,  j = 0;
    while (i < nums.length) {
      if (nums[i] != 0) {
        let temp = nums[i];
        nums[i] = 0;
        nums[j] = temp;
        j++;
      }
      i++;
    }
    return;
  };