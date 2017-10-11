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
