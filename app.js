function
if (num > 5 && num <10) {
  return "Yes";
}
return "No";


function testLogicalOr(val) {
  // Only change code below this line

  if (val >20 || val <10) {

    return "Outside";

  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

// RESULTS:
// You should use the || operator once
// You should only have one if statement
// testLogicalOr(0) should return "Outside"
// testLogicalOr(9) should return "Outside"
// testLogicalOr(10) should return "Inside"
// testLogicalOr(15) should return "Inside"
// testLogicalOr(19) should return "Inside"
// testLogicalOr(20) should return "Inside"
// testLogicalOr(21) should return "Outside"
// testLogicalOr(25) should return "Outside"
