# NODE LCD Display

## Requirements

### System

This was developped and tested using Elementary OS (Ubuntu 16.04). Any Linux system with a batch terminal or even windows with git and NodeJs installed should do.

### NodeJS
 
Make sure you have [NodeJS](https://nodejs.org/en/download) and npm installed

```
node -v
npm -v
```

## Clone the project

Clone the project
```
git clone https://github.com/RomaricDel/node-lcd-display.git
```

Go to the project directory and install dependencies
```
cd node-lcd-display
npm install
```

## Run tests

To run the tests and check that everything is working as expected just run
`npm test`

## CLI Usage

To run this programm you just need to give a string input as parameter
```
npm start <yourinputstring>
```

Optional params are:
1. Char Length: To specify a grid length, default is 3.
2. LCD Format file path: To specify another file format. Default is "./lcdformat4.txt"

```
npm start <yourinputstring> [charLength] [formatFilePath]
```
