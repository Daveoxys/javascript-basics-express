function negate(a) {
 // your code here
 return a=!a
}

function both(a, b) {
  // your code here
  if (a == true && b == true)
  return true;
  else 
  return false;
}

function either(a, b) {
  // your code here
  if (a == true || b == true)
  return true;
  else
  return false;
};

function none(a, b) {
  // your code here
  if (a == true || b == true)
  return false;
  else
  return true;
};

function one(a, b) {
  // your code here
  if (a&b == true)
  return false;
  else
  if (a == true | b == true)
  return true;
  else
  return false;
};

function truthiness(a) {
  // your code here
  if (a === truthiness)
  return true;
  else
  return false;
};

function isEqual(a, b) {
  // your code here
  if (a === b)
  return true;
  else
  return false;
};

function isGreaterThan(a, b) {
  // your code here
  if (a > b)
  return true;
  else
  return false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b)
  return true;
  else
  return false;
};

function isOdd(a) {
  // your code here
  if (a % 2 !== 0)
  return true;
  else 
  return false;
};

function isEven(a) {
  // your code here
  if (a % 2 == 0)
  return true;
  else
  return false;
};


function isSquare(a) {
  // your code here
  return a > 0 && Math.sqrt(a) % 1 === 0;  
};

function startsWith(char, string) {
  // your code here
  if (string.startsWith('a'))
  return true;
  else
  return false;
};

function containsVowels(string) {
  // your code here
  if (string.includes('a'||'e'||'i'||'o'||'u'))
  return true;
  else 
  return false;
};

function isLowerCase(string) {
  // your code here
  if (string == string.toLowerCase())
  return true;
  else
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
