// Fred Solution
// Viral advertising

"use strict"; //Strict mode turn on


function viralAdvertising (n){
let share = 5;
  let cum = 0;
  let like = 0;
  
  for (let i = 1; i <= n; i++){
    like = Math.floor(share/2);
    cum += like;
    share = like * 3;
  }
  
  return cum;

}


// Abraham Solution

function extraLongFactorials(n) {
    // Write your code here
   let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    console.log(String(factorial(BigInt(n))));
}