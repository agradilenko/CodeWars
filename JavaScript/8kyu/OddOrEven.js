/*Task:
    Given a vector of numbers, determine whether the sum of all of the numbers is odd or even.

    Give your answer as a String matching "odd" or "even".

    If the input array is empty consider it as: [0] (array with a zero).*/

//Solution v1.0 (without reduce)

function oddOrEven(array) {
  let sum = 0;
  if (array.length === 0) {
    return "even";
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

//Solution v1.1 (with reduce)

function oddOrEven1_1(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}