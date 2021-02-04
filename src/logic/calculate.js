import operate from './operate';

let isTotal = true;

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const operators = ['÷', 'x', '+', '-'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
    isTotal = true;
  } else if (buttonName === '+/-') {
    if (isTotal) {
      (total *= -1).toString();
    } else {
      (next *= -1).toString();
    }
  } else if (buttonName === '%') {
    if (isTotal) {
      (total /= 100).toString();
    } else {
      (next /= 100).toString();
    }
  } else if (operators.includes(buttonName)) {
    if (isTotal) {
      operation = `${buttonName}`;
      isTotal = !isTotal;
    }
  } else if (digits.includes(buttonName)) {
    if (isTotal) {
      total = total === null ? buttonName : total + buttonName;
    } else {
      next = next === null ? buttonName : next + buttonName;
    }
  } else if (buttonName === '=') {
    isTotal = !isTotal;
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
