function sayHello(string) {
  return `Hello, ${string}!`;
}

function uppercase(string) {
  return string.toUpperCase('abc');
}

function lowercase(string) {
  return string.toLowerCase('ABC');
}

function countCharacters(string) {
  return string.length;
}

function firstCharacter(string) {
  return string.charAt(0);
}

function firstCharacters(string, n) {
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
