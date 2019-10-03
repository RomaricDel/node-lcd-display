const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const lcd = require('./lcd');
let result0_9 = ` _     _  _     _  _  _  _  _ 
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_|  |
`;

let result0_9_4x4 = ` __      __  __      __  __  __  __  __ 
|  |   |   |   ||  ||   |      ||  ||  |
|  |   | __| __||__||__ |__    ||__||__|
|__|   ||__  __|   | __||__|   ||__|   |
`;

let result910 = ` _     _ 
|_|  || |
  |  ||_|
`;

describe('LCD Display', () => {
  beforeEach(() => {
    lcd.initLCDFormat();
  });

  context('No input', () => {

    it('Should not throw an error', () => {
      (function () {
        lcd.toLCDDisplay('');
      }.should.not.throw());
    });

    it('Should return empty string', () => {
      lcd.toLCDDisplay('').should.equal("");
    });

  });

  context('String input', () => {

    it('Should throw an error', () => {
      (function () {
        lcd.toLCDDisplay('azerty');
      }.should.throw());
    });
  });

  context('Number input', () => {

    it('Should not throw an error', () => {
      (function () {
        lcd.toLCDDisplay('910');
      }.should.not.throw());
    });

    it('Should return result', () => {
      lcd.toLCDDisplay('0123456789').should.equal(result0_9);
    });

    it('Should return result', () => {
      lcd.toLCDDisplay('910').should.equal(result910);
    });
  });
});

describe('LCD Display Grid 4x4', () => {
  beforeEach(() => {
    lcd.initLCDFormat(4, "./lcdformat4.txt");
  });

  context('No input', () => {

    it('Should not throw an error', () => {
      (function () {
        lcd.toLCDDisplay('');
      }.should.not.throw());
    });

    it('Should return empty string', () => {
      lcd.toLCDDisplay('').should.equal("");
    });

  });

  context('String input', () => {

    it('Should throw an error', () => {
      (function () {
        lcd.toLCDDisplay('azerty');
      }.should.throw());
    });
  });

  context('Number input', () => {

    it('Should not throw an error', () => {
      (function () {
        lcd.toLCDDisplay('910');
      }.should.not.throw());
    });

    it('Should return result', () => {
      lcd.toLCDDisplay('0123456789').should.equal(result0_9_4x4);
    });

  });
});