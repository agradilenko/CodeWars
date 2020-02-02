//Complete the solution so that it reverses the string value passed into it.

//Solution

//Version 1.0

function solution(str){
  let newStr = '', i;
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;

}

//version 1.1

function solution1_1(str){
  return str.split("").reverse().join("");
}