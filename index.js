const lcd = require('./lcd');

/* Splitting args to check we have an input string */
const inputArgs = process.argv.slice(2);
if (!inputArgs || inputArgs.length < 1) {
  console.warn('Please provide the string you want to display as input argument');
  console.warn('Format is: \nnpm start <stringinput> [charLength] [formatFilePath]')
  console.warn('For exemple:');
  console.warn('$npm start 910');
  console.warn('$npm start 910 4 ./lcdformat4.txt');
  return;
}
try {
  const inputString = inputArgs[0];
  let charLength;
  let filePath;
  if (inputArgs.length >= 2) {
    /* Second argument is charLength parameter */
    charLength = parseInt(inputArgs[1]);
  }
  if (inputArgs.length >= 2) {
    /* Third argument is filePath parameter */
    filePath = inputArgs[2];
  }
  /* Init LCD Format with lcdformat.txt file */
  lcd.initLCDFormat(charLength, filePath);
  /* Convert input string to LCD string */
  const lcdString = lcd.toLCDDisplay(inputString);
  console.log(lcdString);
} catch (error) {
  console.error(error);
}