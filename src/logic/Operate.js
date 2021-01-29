import Big from 'big';

const Operate = (numberOne, numberTwo, operation) => {
  const operations = {
    '+': (n1, n2) => Big(n1) + Big(n2),
    '-': (n1, n2) => Big(n1) - Big(n2),
    x: (n1, n2) => Big(n1) * Big(n2),
    '÷': (n1, n2) => Big(n1) / Big(n2),
  };

  operations[operation](numberOne, numberTwo);
};

export default Operate;
