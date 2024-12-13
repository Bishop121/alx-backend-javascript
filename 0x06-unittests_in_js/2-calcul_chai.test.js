const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("SUM: Sum of 2 numbers", () => {
  it("checking if number is round for 2 whole numbers", () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('SUM', 3, 1.2)).to.equal(4);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('SUM', 3, 1.5)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUM', 3.1, 1.4)).to.equal(4);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUM', 3.5, 1.2)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUM', 3.1, 1.5)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUM', 3.6, 1.8)).to.equal(6);
  });
});

describe("SUBTRACT: Subtraction of b from a", () => {
  it("checking if number is round for 2 whole numbers", () => {
    expect(calculateNumber('SUBTRACT', 8, 3)).to.equal(5);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('SUBTRACT', 7.2, 3)).to.equal(4);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('SUBTRACT', 7.5, 3)).to.equal(5);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('SUBTRACT', 5, 1.2)).to.equal(4);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('SUBTRACT', 7, 1.5)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUBTRACT', 5.1, 1.2)).to.equal(4);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUBTRACT', 5.5, 1.2)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUBTRACT', 7.1, 1.5)).to.equal(5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('SUBTRACT', 7.6, 1.8)).to.equal(6);
  });
});

describe("DIVIDE: Division of 2 numbers", () => {
  it("checking if number is round for 2 whole numbers", () => {
    expect(Math.round(calculateNumber('DIVIDE', 8, 3))).to.equal(3);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('DIVIDE', 12.2, 3)).to.equal(4.0);
  });

  it("checking if number is round for first float & second whole", () => {
    expect(calculateNumber('DIVIDE', 14.5, 3)).to.equal(5.0);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('DIVIDE', 20, 5.2)).to.equal(4.0);
  });

  it("checking if number is round for first whole & second float", () => {
    expect(calculateNumber('DIVIDE', 10, 1.5)).to.equal(5.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('DIVIDE', 2.1 ,1.2)).to.equal(2.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('DIVIDE', 4.5, 1.2)).to.equal(5.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('DIVIDE', 7.1, 1.5)).to.equal(3.5);
  });

  it("checking if number is round for 2 float numbers", () => {
    expect(calculateNumber('DIVIDE', 7.6, 1.8)).to.equal(4.0);
  });

  it("checking if 'Error' is returned", () => {
    expect(calculateNumber('DIVIDE', 7.6, 0.1)).to.equal("Error");
  });
});

