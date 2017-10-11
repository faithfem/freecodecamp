//PALINDROME BELOW IS ONE WAY TO CODE BUT COSTS A LOT IN TERMS OF DATA USAGE BECAUSE REVERSING A STRING TAKES A LOT OF WORK
function palindrome(str){
  str = str.LowerCase().replace(/\W|_/g, "").split("");
  var reverseStr = str.slice().reverse();
  return reverseStr.join("") === str.join("");
}
console.log(palindrome);


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
palindrome("never odd or even");

}
