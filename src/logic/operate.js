import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  const operations = {
    '+': (n1, n2) => n1.plus(n2),
    '-': (n1, n2) => n1.minus(n2),
    x: (n1, n2) => n1.times(n2),
    '÷': (n1, n2) => {
      if (n2.c[0] === 0) {
        return 'Error: Division by 0';
      }
      return n1.div(n2);
    },
  };

  return operations[operation](num1, num2).toString();
};

export default operate;
