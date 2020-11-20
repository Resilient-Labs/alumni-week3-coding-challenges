//Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + .... All divisions are integer

function halvingSum(n) {
    let score=0;
   //while n is greater, run loop
    while (n>=1){
    //add n to its first value and divide the value
    score+=n;
    //round down and divide n by 2
    n=Math.floor(n/2);
    }
    return score
 }

 console.log('test1', halvingSum(25))//47
 console.log('test2', halvingSum(127))//247
