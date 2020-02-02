/*Complete the square sum function so that it squares each number passed into it and then sums the results together.
    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

//Solution version 1.0 (Without reduce function)

function squareSum(numbers){
  let sum = [];
    for(let i = 0; i < numbers.length; i++)
    {
      sum.push(numbers[i]*numbers[i]);
    }
  let squareSum = 0;
    for(let j = 0;j < sum.length; j++)
    {
      squareSum += sum[j];
    }
  return squareSum;
}

console.log (squareSum([1,4,4])); // 33

//Solution version 1.1 (With reduce function)

function squareSum1_1(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

console.log (squareSum1_1([1,4,4])); //33


