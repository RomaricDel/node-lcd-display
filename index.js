const lcd = require('./lcd');

/* Splitting args to check we have an input string */
const inputArgs = process.argv.slice(2);
if (!inputArgs || inputArgs.length !== 1) {
  console.warn('Please provide the string you want to display as input argument');
  console.warn('For exemple:');
  console.warn('npm start 910');
  return;
}
const inputString = inputArgs[0];
/* Init LCD Format with lcdformat.txt file */
lcd.initLCDFormat();
/* Convert input string to LCD string */
const lcdString = lcd.toLCDDisplay(inputString);
console.log(lcdString);