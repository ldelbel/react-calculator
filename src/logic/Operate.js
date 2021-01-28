import Big from 'big';

const Operate = (numberOne, numberTwo, operation) => (
  eval(`${Big(numberOne)} ${operation} ${Big(numberTwo)}`)
)

export default Operate;