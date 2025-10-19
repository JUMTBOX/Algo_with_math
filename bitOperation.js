(function (num1, num2) {
  console.info(`a: ${num1.toString(2)}, b: ${num2.toString(2)}`);

  console.info("BIT OPERATION AND(&) RESULT >>>", (num1 & num2).toString(2)); // 1010
  console.info("BIT OPERATION OR(|) RESULT >>> ", (num1 | num2).toString(2)); // 1111
  console.info("BIT OPERATION XOR(^) RESULT >>>", (num1 ^ num2).toString(2)); // 0101

  console.info(10 << 2 === 40);
  console.info(40 >> 2 === 10);
})(11, 14);
