const fs = require('fs');

const charLength = 3;
let characters;

/*
 * This function will init our LCD Format for each authorized characters
 * Allowing us to easily extend it to letters in the future.
 */
module.exports.initLCDFormat = () => {
  /* We get lcdformat.txt file */
  const lcdFormat = fs.readFileSync('./lcdformat.txt', 'utf-8');
  /*
   * We now that format is a grid of 3 for each characters
   * First we split line by line,
   * then we will add first "charLength" characters to each allowed characters
   */
  characters = {
    '0': [],
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
  }
  let lines = lcdFormat.split('\n');
  if (lines.length !== charLength) {
    throw new Error('LCD Format file does not match grid length');
  }
  /* Each char shoud match charLength */
  lines.forEach((line, index) => {
    if (line.length !== Object.keys(characters).length * charLength) {
      throw new Error('LCD Format file does not match grid length')
    }
    /* Line match, we fill the related character */
    Object.keys(characters).forEach((char, index) => {
      let charStr = line.substr(index * charLength, charLength);
      characters[char].push(charStr);
    });
  });
  /* Our LCD Format object is built */
  console.log(characters);
}

module.exports.toLCDDisplay = (input) => {
  /* Checking that LCD format was init */
  if (!characters) {
    this.initLCDFormat();
  }
  /* First we check input validity */
  if (!input || input.length <= 0) {
    return "";
  }
  if (!/[0-9]+/g.test(input)) {
    /* Does not match authorized characters */
    throw new Error("Bad input data, only numbers are allowed");
  }
  /* We start building our output, we will have an array of charLength for each char */
  let lcdLetters = Array.from(input)
    .filter(c => characters[c] !== undefined)
    .map(c => characters[c]);
  /* We have an array of lines by characters, now we need to built a unique string */
  let outputString = "";
  for (let i = 0; i < charLength; i++) {
    for (let j = 0; j < lcdLetters.length; j++) {
      outputString += lcdLetters[j][i];
    }
    outputString += "\n";
  }
  console.log("------------- Result IS ----------\n");
  console.log(outputString);
  return outputString;
}