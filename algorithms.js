//REVERSE A STRING
function reserseString(str){

  return str.split("").reverse().join("");
}
reverseString("hello");

//FACTORIALIZE A NUMBER


//FACTORIALIZE
function factorialize(num) {
  if (num ===0) {return 1;}
  return num * factorialize(num-1);
}

factorialize(5);

//FACTORIALIZE (DOESN'T QUITE WORK)
function factorialize(num) {
  var factorial = 1;
  for (var n = 2; n<=num, n++){
    factorial = factorial*n;
  }
  return factorial;
}

//PALINDROME BELOW IS ONE WAY TO CODE BUT COSTS A LOT IN TERMS OF DATA USAGE BECAUSE REVERSING A STRING TAKES A LOT OF WORK
function palindrome(str){
  str = str.LowerCase().replace(/\W|_/g, "").split("");
  var reverseStr = str.slice().reverse();
  return reverseStr.join("") === str.join("");
}

//PALINDROME PART 2: BETTER SOLUTION. IT BREAKS UP THE TASKS INTO PIECES AND SOLVES THAT WAYS
function palindrome(str){

var rcase = str.replace(/[\W_]/g, ""); //removes all non-alphanumeric characters
var lcase = rcase.toLowerCase();
var revcase = lcase.split("").reverse().join("");

if (lcase == revcase) {
  return true;
}else if (lcase !==revcase) {
  return false;
}
}
